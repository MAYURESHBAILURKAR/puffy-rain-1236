



let loadData = ()=>{
    let data1 =`<div id="main">
        <div id="main-item">
            <h1>Hiver Updates: Know your customers better with Hiver Contacts</h1>
           
            <p>Jul 18, 2022
            |    
              7 min read
            |    
            
             Deepika Saxena</p>
        </div>
        <div id="main-img">
            <img src="https://images.hiverhq.com/blog/wp-content/uploads/2022/07/tr:h-334,w-495,pr-true/Series-B-10-1.png" alt="">
        </div>
    </div>`;

    // let data2= `<div class="main">
    //     <div id="main-img1">
    //         <img src="https://images.hiverhq.com/images/new-landing-2022/blog/subscribe.png" alt="">
    //     </div>
    //     <div id="main-item1">
    //         <h1>Want us to send you </h1>
    //         <h1>awesome content?</h1>

    //         <div class="input-group">
    //             <input type="email" class="input" id="Email" name="Email" placeholder="Enter Your Email Address Here" autocomplete="off">
    //             <input class="button--submit" value="Subscribe" type="submit">
    //         </div>

    //     </div>
    // </div>`;

        let data3 = `<div id="articles">
            <div id="card-1">
                <img src="https://images.hiverhq.com/blog/wp-content/uploads/2018/03/tr:h-237,w-350,pr-true/hiver-intergation.jpg" alt="">
                <p>Customer Service | 6 min Read</p>
                <h2>Everything You Need to Know About Automations in Hiver</h2>
                <p>We live in an increasingly connected world. With modern technology like smartphones, voice assistants, and connected devices, we can get real-time updates on practically anything under the sun in a matter of seconds.</p>
                <button class="cta">
                    <span>Read Blog</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </button>

            </div>
            <div id="card-2">
                <img src="https://images.hiverhq.com/blog/wp-content/uploads/2017/05/tr:h-237,w-350,pr-true/automation.jpg" alt="">
                <p>Customer Service | 6 min Read</p>
                <h2>Hiver Now auto ads newsly sent emails to Shared Mobiles</h2>
                <p>We live in an increasingly connected world. With modern technology like smartphones, voice assistants, and connected devices, we can get real-time updates on practically anything under the sun in a matter of seconds.</p>
                <button class="cta">
                    <span>Read Blog</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </button>
            </div>
            <div id="card-3">
                <img src="https://images.hiverhq.com/blog/wp-content/uploads/2017/03/tr:h-237,w-350,pr-true/email-notes.jpg" alt="">
                <p>Customer Service | 6 min Read</p>
                <h2>Email Notes to Make gmail Converstion Smoother</h2>
                <p>We live in an increasingly connected world. With modern technology like smartphones, , and connected devices, we can get real-time updates on practically anything under the sun in a matter of seconds.</p>
                <button class="cta">
                    <span>Read Blog</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </button>
            </div>
            

        </div>`;

    document.getElementById('submain-1').innerHTML=data1
    // document.getElementById('submain-3').innerHTML=data2
    document.getElementById('submain-4').innerHTML=data3

}

loadData();