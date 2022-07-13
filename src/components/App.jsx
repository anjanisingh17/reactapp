import './App.css';
import Testing from './Testing';
import {addition,subtraction, multiplication, division} from './Calculator';
import Netflix from './Netflix';
function App() {
  return (
    <>
      <Testing />
      <div className="cardbody"> 
      <Netflix imgsrc="https://occ-0-37-33.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABW9iUDD_DOmmxBsgGSgEyv2bYOesKT_qer7iNpQivrE91Vl5wiRaXsJYhNdQwmFEohAtwEzg-wHcVfZOkGSSgMiWILlFHVJ7OwX6.jpg?r=db5" 
        
        title="A Netflix Original Series" sname="Business Proposal" 
        link="https://www.netflix.com/in/title/81509440" 
      />
      
      <Netflix imgsrc="https://wannaparty.in/wp-content/uploads/2021/10/MONEY-hesit.jpeg" 
        
        title="A Netflix Original Series" sname="Money Hiest" 
        link="https://www.netflix.com/in/title/81509440" 
      />

      <Netflix imgsrc="https://i.cdn.newsbytesapp.com/images/l65820210807103246.jpeg" 
        
        title="A Netflix Original Series" sname="Kota Factory" 
        link="https://www.netflix.com/in/title/81249783" 
      />
      
    
      
      <Netflix imgsrc="https://images.hindustantimes.com/img/2021/10/15/1600x900/little_things_review_1634282688172_1634282696188.jpeg" 
        
        title="A Netflix Original Series" sname="Little Things" 
        link="https://www.netflix.com/in/title/81011159" 
      />

    <Netflix imgsrc="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf25qKvnzFiWcP1e_5SJd-Qn4murkCGtszX7tLzNnRGyIWGmZFndn2IQ9Ub69t9H7Ub5Vw1d29eJboknm26pD1d7-l8F-rAUDugPxoCMCMUA_ZadkgDd6hncIm1dUw.jpg?r=257" 
        
        title="A Netflix Original Series" sname="The King" 
        link="https://www.netflix.com/in/title/81260283" 
      />

      <Netflix imgsrc="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/08/gunjan-1598609908.jpg" 
        
        title="A Netflix Original Series" sname="Gunjan Saxena" 
        link="https://www.netflix.com/in/title/81292944" 
      />

      <Netflix imgsrc="https://miro.medium.com/max/1400/1*-7Nc8lKupUuDsOEIGn5O7A.jpeg" 
        
        title="A Netflix Original Series" sname="How It Ends" 
        link="https://www.netflix.com/in/title/80167481" 
      />
      </div>
      <br />
      <hr/>
      <div>This is app component
        <ol>
        <li>This is {addition(2,3)}</li>
        <li>This is {subtraction(50,20)}</li>
        <li>This is {multiplication(40,20)}</li>
        <li>This is {division(40,2)}</li>
        </ol>
      </div>
    </>
  )

}

export default App;
   
