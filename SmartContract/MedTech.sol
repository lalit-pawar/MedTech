// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";

contract MedTech is Ownable{

    struct PatientDetails {
        uint PatientId;
        uint8 Categorie; // 1 Intensive, Emergensive, Non-entensive  // Default will be 3.(Non-Intensive) // Later will make a enum for the same
        string PatientDetailUri; // Name, registered date, address, regiesterd on, Basic Details (alergic to something), Blood group, MoreDetails1, MoreDetails2
        address PatientAddress;
        address PatientNominee;
        string UpdatesFromDocotr;
    }

    struct DoctorDetails {
        uint DoctorId;
        address DoctorAddress;
        string DoctorDetailsUri;
        uint Rating;
    }

    struct InsurenceCompany {
        address CompanyAddress;
        string details;
        
    }

    mapping (address => bool) public isPatientRegistered;
    mapping (address => PatientDetails) public PatiendDetailMap;
    mapping (address => address[]) public whitelistedDoctors;
    mapping (address => DoctorDetails) public DoctorDetailsMapping;
    mapping (address => mapping (address => bool)) public isPatientRatedToDoctor;

    uint public registeredPatientCount;
    uint public registeredDoctorCount;

    modifier onlyWhiteListedDoctor(address _patientAddress) {
        bool whiteListBool;
        for(uint i = 0; i < whitelistedDoctors[_patientAddress].length ;  i ++ ){
            if(whitelistedDoctors[_patientAddress][i] == msg.sender){
                whiteListBool = true;
                break;
            }   
        }
        require(whiteListBool, "Doctor is not whitelisted!");
        _;
    }
    
    // Onblarding Patient
    function onBoardUser ( string memory _uri, address _patientNominee) public {
        require(!isPatientRegistered[msg.sender], "User already registered!");
        PatiendDetailMap[msg.sender] = PatientDetails(registeredPatientCount + 1, 3, _uri, msg.sender, _patientNominee, "");
        registeredPatientCount += 1;
        isPatientRegistered[msg.sender] = true;

    }

    function updateNominee ( address _patientNominee) public {
        require(isPatientRegistered[msg.sender], "First register as user!");
        PatiendDetailMap[msg.sender].PatientNominee = _patientNominee;

    }

    function whiteListDoctorFun(address _doctorAddress) public {
        require(true, "Check the doctoris valid or not!");
        require(isPatientRegistered[msg.sender], "First register as user!");
        whitelistedDoctors[msg.sender].push(_doctorAddress);
    }

    function updatePatientDetails(address _userAddress, uint8 _userCategori, string memory _detailsUri) public onlyWhiteListedDoctor(_userAddress)  {
        PatiendDetailMap[_userAddress].Categorie = _userCategori;
        PatiendDetailMap[_userAddress].UpdatesFromDocotr = _detailsUri;
    }

    function removeWhitelist(address _doctorAddress) public {
    
    }

    function claimInsurence() public {

    }

    function whitelisteInsurenceCompany()  public {

    }

    function rateDoctor(address _doctorAddress) public {
        require(isPatientRegistered[msg.sender], "First register as user!");
        require(! isPatientRatedToDoctor[msg.sender][_doctorAddress], "User already Voted!");
        isPatientRatedToDoctor[msg.sender][_doctorAddress] = true;
        DoctorDetailsMapping[_doctorAddress].Rating += 1;
    }


// Docotos:- 

    function onBoardDoctor( address _doctorAddress, string memory _uri) public onlyOwner {
        DoctorDetailsMapping[msg.sender] = DoctorDetails(registeredDoctorCount + 1, _doctorAddress, _uri, 0); // Initially the rating will be zero!
        registeredDoctorCount += 1;
    }



}

// Functions

