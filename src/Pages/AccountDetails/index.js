
import Header from '../../components/Header'

import './index.css'


const AccountDetailsSection = () => {
 

  
  return (
    <>
      <Header />

      <div className="account-details-container">
        <h1 className="heading">Account</h1>
        <hr className="separator-line" />
        <div className="membership-container">
          <p className="side-heading">Membership:</p>
          <div className="credentials">
            <p>rahul@gamil.com</p>
            <p>Password:*******</p>
          </div>
        </div>
        <hr className="separator-line" />
        <div className="plan-details-container">
          <p className="side-heading">Plan Details</p>
          <p>Premium</p>
          <p className="ultra-text">Ultra HD</p>
        </div>
        <hr className="separator-line" />
        <div className="button-container">
          <button className="button" type="button" >
            Logout
          </button>
        </div>
      </div>
     
    </>
  )
}
export default AccountDetailsSection