import React from 'react'
import Main from '../Main/Main'

function Contact() {
  return (
    <>
		<Main name="Contact Us!" />
    <div class="container">
        <div class="container">
            <div class="form-elements">
                <div class="form-group">
                    <fieldset class="pure-group my-2">
                        <label for="name"> Name<span class="asterick"></span></label>
                        <input type="name" name="name"id="name" required class="form-control my-1" placeholder="Full Name" />
                    </fieldset>
                    <fieldset class="pure-group my-2">
                            <label for="email"> Email Address<span class="asterick"></span></label>
                            <input type="email" name="email"id="email" required class="form-control " placeholder="name@example.com" />
                    </fieldset>
                    <fieldset class="pure-group my-2">
                            <label for="number"> Contact Number</label>
                            <input type="number" name="number" id="number" class="form-control" placeholder="Contact Number" />
                    </fieldset>
                    <fieldset class="pure-group my-2">
                            <label for="help"> How can we help you?<span class="asterick"></span></label>
                            <textarea name="help" required id="help" class="form-control form-control-range"  rows="6"></textarea>
                    </fieldset>
                        <button type="submit" class="btn btn-lg my-3 btn-primary ">Submit</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact