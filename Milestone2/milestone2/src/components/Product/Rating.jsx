import React from 'react'

function Rating() {
  return (
    <section className="ratings">
        <div className="container">
            <div className="row">

                <div className="col-6">
                    <div className="row">
                        <div className="col-6">
                            <span>
                                <h5>Add Ratings:</h5>
                            </span>
                        </div>
                        <div className="col-6">
                            <ion-icon onclick="changeText(1)" class="test gold" className="test gold" name="star-outline"></ion-icon>
                            <ion-icon onclick="changeText(2)" class="test gold" className="test gold" name="star-outline"></ion-icon>
                            <ion-icon onclick="changeText(3)" class="test gold" className="test gold" name="star-outline"></ion-icon>
                            <ion-icon onclick="changeText(4)" class="test gold" className="test gold" name="star-outline"></ion-icon>
                            <ion-icon onclick="changeText(5)" class="test gold" className="test gold" name="star-outline"></ion-icon>
                        </div>

                    </div>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-6">
                            <span>
                                <h5>Add Reviews:</h5>
                            </span>
                        </div>
                        <div className="col-6">
                            <textarea name="review" placeholder="What did you think of the product?" id="" cols="30"
                                rows="2"></textarea>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Rating