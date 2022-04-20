import React,{useState} from "react"
import "./about.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Navbar from "../navbar/navbar";

const About = () => {

    const navigate = useNavigate()

    return (
        <div className="about">
<Navbar/>
         
          <h1>About Page</h1>
          <div>
          <div>
          <div>Vaccination against a range of bacterial and viral diseases is an integral part of communicable disease control worldwide. Vaccination against a specific disease not only reduces the incidence of that disease, it reduces the social and economic burden of the disease on communities. Very high immunisation coverage can lead to complete blocking of transmission for many vaccine preventable diseases (VPD). It is always better to prevent a disease than to treat it after it occurs. For ex. the worldwide eradication of smallpox and the near eradication of polio from many countries provide excellent examples of the role of immunisation in disease control.</div>

<div>Early immunisation of infants and completion of the full schedule of vaccinations up to and through adulthood contributes to reducing the incidence and burden of vaccine preventable diseases.</div>
<div>Immunity is the body’s way of preventing disease. When a baby is born, his/her immune system is not fully developed, which can put him/her at greater risk for infections. Vaccines reduce a child’s risk of infection by working with his/her body’s natural defences to help safely develop immunity to disease.</div>
<div>Mild side effects are expected</div>
<div>Like any medicine, vaccines can cause side effects such as a low-grade fever, or pain and redness at injection site. Mild reactions go away within a few days on their own.</div>
<div>Severe, long lasting side effects are extremely rare.</div>
</div>

<div>Common Vaccine preventable diseases:</div>



<div>
<div>1.	Polio</div>
<div>Polio is a crippling and potentially deadly infectious disease that is caused by poliovirus. The virus spreads from person to person and can invade an infected person’s brain and spinal cord, causing paralysis.</div>
<div>polio is still a threat in some other countries. Making sure that infants and children are vaccinated is the best way to prevent polio from returning.</div>
<div>Doctors recommend that a child should get four doses of the polio vaccine (also called IPV). One dose at each of the following ages:</div>
<ul>
<li>1-2 months</li>
<li>4 months</li>
<li>12-23 months</li>
<li>4-6 years</li>
</ul>
</div>

<div>
<div>2.	Tetanus</div>
<div>Tetanus causes painful muscle stiffness and lockjaw and can be fatal. Parents used to warn kids about tetanus every time they got scratched, scraped, poked, or sliced ourselves on something metal. Nowadays, the tetanus vaccine is part of a disease-fighting vaccine called DTaP, which provides protection against tetanus, diphtheria, and pertussis (whooping cough).</div>
<div>Doctors recommend that a child should get five doses of the DTaP vaccine. One dose at each of the following ages:</div>
<ul>
<li>1-2 months</li>
<li>4 months</li>
<li>12-23 months</li>
<li>4-6 years</li>
</ul>
</div>

<div>
<div>3. The Flu (Influenza)</div>
<div>Flu is a respiratory illness caused by the influenza virus that infects the nose, throat, and lungs. Flu can affect people differently based on their immune system, age, and health. Flu can be dangerous for children of any age.</div>
<div>The best way to protect babies against flu is for the mother to get a flu vaccine during pregnancy and for all caregivers and close contacts of the infant to be vaccinated. Everyone 6 months and older needs a flu vaccine every year.</div>
<div>Doctors recommend that a child should get the flu vaccine every year starting when they are 6 months old. Children younger than 9 years old who are getting vaccinated for the first time need two doses of flu vaccine, spaced at least 28 days apart.
</div>


</div>

<div>
<div>4.	Hepatitis B</div>
<div>More than 780,000 people per year die from complications to Hepatitis B worldwide. Hepatitis B is spread through blood or other bodily fluids. It’s especially dangerous for babies, since the hepatitis B virus can spread from an infected mother to child during birth. About nine out of every 10 infants who contract it from their mothers become chronically infected, which is why babies should get the first dose of the hepatitis B vaccine shortly after birth. All pregnant women should be tested and all babies should be vaccinated.</div>
<div>Doctors recommend that a child should get three doses of the Hepatitis B shot for best protection. Typically, one dose at each of the following ages:</div>
<ul><li>shortly after birth</li>
<li>1-2 months</li>
<li>6 months</li></ul>
</div>
<div>
<div>5.	Hepatitis A</div>
<div>Hepatitis A is a contagious liver disease and is transmitted through person-to-person contact or through contaminated food and water. Vaccinating against hepatitis A is a good way to help your baby stay Hep A-free and healthy!</div>
<div>Doctors recommend that a child should get two doses of the hepatitis A vaccine. One dose at each of the following ages:</div>
<ul><li>12-23 months</li>
<li>6 months after last dose</li></ul>
</div>

<div>
<div>6.	Rubella</div>
<div>Rubella is spread by coughing and sneezing. It is especially dangerous for a pregnant woman and her developing baby. If an unvaccinated pregnant woman gets infected with rubella, she can have a miscarriage or her baby could die just after birth. Also, she can pass the disease to her developing baby who can develop serious birth defects. </div>
<div>Doctors recommend that a child should get two shots of the MMR vaccine. One dose at each of the following ages:</div>
<ul><li>12-23 months</li>
<li>4-6 years</li></ul>
</div>

<div>
<div>7.	Whooping Cough (Pertussis)</div>
<div>Whooping cough, or pertussis, is a highly contagious disease that can be deadly for babies. It can cause uncontrollable, violent coughing, which often makes it hard to breathe. In babies, this disease also can cause life-threatening pauses in breathing with no cough at all. Mothers should get the whooping cough vaccine during each pregnancy to pass some protection to their babies before birth.</div>
<div>Doctors recommend that a child should get five doses of the DTaP vaccine. One dose at each of the following ages:</div>
<ul>
<li>1-2 months</li>
<li>4 months</li>
<li>6 months</li>
<li>12-23 months</li>
<li>4-6 years</li>
</ul>
</div>

<div>
<div>8.	Pneumococcal Disease</div>
<div>This disease is caused by bacteria called Streptococcus pneumoniae. It causes ear infections, sinus infections, pneumonia, and even meningitis, making it very dangerous for children. The germs can invade parts of the body—like the brain or spinal cord—that are normally free from germs.</div>
<div>Doctors recommend that a child should get four doses of the pneumococcal conjugate vaccine (also called PCV13). One dose at each of the following ages:</div>
<ul>
<li>1-2 months</li>
<li>4 months</li>
<li>6 months</li>
<li>12-23 months</li></ul>
</div>

<div>
<div>9.	Chickenpox</div>
<div>Chickenpox is a disease that causes an itchy rash of blisters and a fever. A person with chickenpox may have a lot of blisters—as many as 500 all over their body. Chickenpox can be serious and even life-threatening, especially in babies, adults, and people with weakened immune systems. Even healthy children can get really sick. </div>
<div>Doctors recommend that a child should get two chickenpox shots. One dose at each of the following ages:</div>
<ul><li>12-23 months</li>
<li>4-6 years</li>
</ul>
</div>

<div>
<div>10.	Diphtheria</div>
<div>Diphtheria can also lead to heart failure, paralysis, and even death. It can cause a thick covering in the back of the nose or throat that makes it hard to breathe or swallow. The vaccine, called DTaP, provides protection against diphtheria, tetanus, and pertussis (whooping cough). While preventable, diphtheria does still exist. </div>
<div>Doctors recommend that a child should get five doses of the DTaP vaccine. One dose at each of the following ages:</div>
<ul>
<li>1-2 months</li>
<li>4 months</li>
<li>6 months</li>
<li>12-23 months</li>
<li>4-6 years</li>
</ul>
</div>

<div>
<div>11.	Tuberculosis</div>
<div>Tuberculosis (TB) is an infection that most often attacks the lungs, but in infants and young children, affects other organs like the brain. A severe case could cause serious complications or death.</div>
<div>TB is very difficult to treat when contracted, and treatment is lengthy and not always successful</div>
<div>Doctors recommend that new borns should receive the BCG vaccine as soon as they are discharged from the hospital.</div>
<div>If for some reason, they miss the BCG vaccination, they can be given the BCG injection anytime up to 5 years of age.</div>
</div>

<div>

<div>Ref- </div>
<div>https://www.cdc.gov/vaccines/parents/diseases/forgot-14-diseases.html</div>
<div>https://www.unicef.org/parenting/health/vaccines-and-diseases-they-prevent</div>
</div>


          </div>
        </div>
    )
}

export default About