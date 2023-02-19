import React from 'react'
import InsurenceCard from './InsurenceCard';
import '../CSS/Insurence.css'

function ApplyInsurence({open}) {
    if(!open){
        return null;
    }

    else{
        return (
            <div>
                <h1>Apply Insurence</h1>
                    <div className="mx-5 my-5 alignCards">

                        <InsurenceCard Name = {"Star Comprehensive Insurance Policy"} Desc = {"On payment of additional premium, the waiting period for Pre-Existing Diseases can be reduced from 3 years to 1 year this is an optional cover."}
                                        Img = {"https://www.starhealth.in/_next/image/?url=https%3A%2F%2Fd28c6jni2fmamz.cloudfront.net%2Fcomprehensive_8fe665c672.jpg&w=1920&q=75"} Address = {"A cash benefit for each completed day in the hospital is provided up to the limits mentioned in the policy clause for a maximum of 7 days per hospitalisation and 120 days per policy period."}/>

                        <InsurenceCard Name = {"Family Health Optima Insurance Plan"} Desc = {"This policy covers family members including self, spouse, up to 3 dependent children, parents and parents-in-law at an affordable premium."}
                                        // Img = {"https://www.starhealth.in/_next/image/?url=https%3A%2F%2Fd28c6jni2fmamz.cloudfront.net%2FHeader_2_ab149e38d7.jpg&w=1920&q=75"} Address = {"More des"}/>
                                        Img = {"https://www.starhealth.in/_next/image/?url=https%3A%2F%2Fd28c6jni2fmamz.cloudfront.net%2Ffamily_health_optima_deb6fe9969.jpg&w=1920&q=75"} Address = {"Expenses incurred for proven Assisted Reproduction Treatments as listed in the policy clause are covered up to the specified limits."}/>
                     
                        <InsurenceCard Name = {"Senior Citizens Red Carpet Health Insurance Policy"} Desc = {"Expenses incurred for modern treatments such as Oral Chemotherapy, Intra Vitreal injections, Robotic Surgeries, etc. are covered up to the limits mentioned in the policy clause."}
                                        Img = {"https://www.starhealth.in/_next/image/?url=https%3A%2F%2Fd28c6jni2fmamz.cloudfront.net%2Fsenior_citizens_red_carpet_5ebf91db95.jpg&w=1920&q=75"} Address = {"Pre-medical test is not mandatory to avail this policy."}/>
                    </div>
            </div>
        )
    }
}

export default ApplyInsurence