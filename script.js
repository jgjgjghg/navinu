




console.log("Steave jobs");

   let color = prompt("What Colour Do You want ?");
            document.body.style.background = color;

      let name  = prompt(" Please Enter Your Name");

           let age   = prompt("How Old Are You ?");

             let human  = prompt("Are You a Robot ? (YES/NO)")

             const button = document.querySelector("button");
             button.addEventListener("click", () => {
               window.location.reload(1);
             });

             function generateOTP() {
              let digits = '0123456789';
              let OTP = '';
              for (let i = 0; i < 6; i++) {
                OTP += digits[Math.floor(Math.random() * 10)];
              }
              return OTP;
            }
            