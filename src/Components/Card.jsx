import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className="card">
        <div className="image_container">
            <img src="https://rnz-ressh.cloudinary.com/image/upload/s--WH4zBww5--/ar_16:10,c_fill,f_auto,g_auto,q_auto,w_1050/4LMON2O_49476_16599605286420_1920_jpg" alt=""/>
        </div>

        <div className="content">
            <div className="details">
                <h2>Andrew Tate<br/><span>Top G</span></h2>

                <div className="data">
                    <h3>32<br/><span>Cars</span></h3>
                    <h3>1M<br/><span>Followers</span></h3>
                    <h3>1<br/><span>Following</span></h3>
                </div>

                <div className="action_buttons">
                    <button>
                        Hire
                    </button>

                    <button>
                        Contact
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card