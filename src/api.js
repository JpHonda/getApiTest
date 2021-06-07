const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();
const axios = require('axios');


router.get("/", (req, res) => {    
    axios.get('http://webcode.me').then(resp => {
        console.log(resp.data);
        res.send(resp.data)
    });
    

    // axios.get('https://cvp1.moph.go.th/api/ImmunizationTarget?cid=1409900727635&hospital_code=13777',
    //     {

    //         headers: {
    //             'Authorization': `token eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbl8xMzc3N0AxMzc3NyIsImlhdCI6MTYyMzExMzkyOSwiZXhwIjoxNjIzMTI0NzI5LCJpc3MiOiJNT1BIIEFjY291bnQgQ2VudGVyIiwiYXVkIjoiTU9QSCBBUEkiLCJjbGllbnQiOnsidXNlcl9pZCI6NTY5OSwidXNlcl9oYXNoIjoiMjlGMEQzRTY0ODlFM0ZCMkFGNDlBQzZCMkUxOUUyMTE3RTQ1OEVGNEVFRUQyMEJFNDRDMTNEMTgzREUxRTAwRDhBQ0VGRkFCIiwibG9naW4iOiJBZG1pbl8xMzc3NyIsIm5hbWUiOiLguJnguLLguIfguKrguLLguKLguKrguKHguKMg4Lil4Li14Lil4LiU4Liy4Lig4Lix4LiX4Lij4LiB4Li44LilIiwiaG9zcGl0YWxfbmFtZSI6IuC5guC4o-C4h-C4nuC4ouC4suC4muC4suC4peC4qOC4o-C4teC4meC4hOC4o-C4tOC4meC4l-C4o-C5jCDguKHguKvguLLguKfguLTguJfguKLguLLguKXguLHguKLguILguK3guJnguYHguIHguYjguJkiLCJob3NwaXRhbF9jb2RlIjoiMTM3NzciLCJlbWFpbCI6InBzYWlzYUBra3UuYWMudGgiLCJjbGllbnRfaXAiOiIxODAuMTgzLjY4LjIwNyIsInNjb3BlIjpbeyJjb2RlIjoiSU1NVU5JWkFUSU9OX1ZJRVc6MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9VUERBVEU6MSJ9LHsiY29kZSI6Ik1PUEhfQUNDT1VOVF9DRU5URVJfQURNSU46MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9QRVJTT05fVVBMT0FEOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fREFTSEJPQVJEOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fU0xPVDoxIn0seyJjb2RlIjoiSU1NVU5JWkFUSU9OX1FVT1RBOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fUkVQT1JUOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fUkVQT1JUX0VYQ0VMOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fQUVGSV9VUERBVEU6MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9TTE9UX01BTkFHRVI6MSJ9XSwicm9sZSI6WyJtb3BoLWFwaSJdLCJzY29wZV9saXN0IjoiW0lNTVVOSVpBVElPTl9WSUVXOjFdW0lNTVVOSVpBVElPTl9VUERBVEU6MV1bTU9QSF9BQ0NPVU5UX0NFTlRFUl9BRE1JTjoxXVtJTU1VTklaQVRJT05fUEVSU09OX1VQTE9BRDoxXVtJTU1VTklaQVRJT05fREFTSEJPQVJEOjFdW0lNTVVOSVpBVElPTl9TTE9UOjFdW0lNTVVOSVpBVElPTl9RVU9UQToxXVtJTU1VTklaQVRJT05fUkVQT1JUOjFdW0lNTVVOSVpBVElPTl9SRVBPUlRfRVhDRUw6MV1bSU1NVU5JWkFUSU9OX0FFRklfVVBEQVRFOjFdW0lNTVVOSVpBVElPTl9TTE9UX01BTkFHRVI6MV0iLCJhY2Nlc3NfY29kZV9sZXZlbDEiOiInMTM3NzcnIiwiYWNjZXNzX2NvZGVfbGV2ZWwyIjoiJyciLCJhY2Nlc3NfY29kZV9sZXZlbDMiOiInJyIsImFjY2Vzc19jb2RlX2xldmVsNCI6IicnIiwiYWNjZXNzX2NvZGVfbGV2ZWw1IjoiJycifX0.DWrTFnnIURKIJz4M6SR3qKDEPGgtyrb-hDfqtJ93GM9347U1-2PXkm7dMowdHvXX249HJ_FKCYugZR711kJdA7H3Ddb3y19SWyBwnKaT3lkvm2b7VSYAC837iV9xBH_5HhAKUaZoJZu4XUUycSfGv7ar04JOKNvagNfal98hBrmKJK_nJFr4zTl3syUqLHftHvm8x3Er4fcgGN7yoVadpi7o2isocTA0loyMhAccog238EwHLZeo7u3j2TQDuJCaymssVytl7y59Gl9dLs7VLiAseRNKZVCrAF7tAOIM7VdxADZY8zszrZsrnBODekpOkmVs6qxH5tORYQlyoM_U10Xo-dB5WXas0HuKQPUAySn7Uch-p6_8T9eM83TMtRdpM2ssvQH6TAozJdXfboY2CJnNPJ8cpuSH2KtMsxDDOzkuRBYhBp44nOCqnyUXs-VXOdCvhq3R0-VACUP3x5moASR1kUiSgKRaOk0bxktl7DDShPlKv3zOnQ44ZYkkU1nQO1pTQ4H-zEnNl32s1r9IUss0cHvIozVLDAREAsYtBaZoiWITHBiJuj5Gr1kX73HvcCSRFnMv7l6FOy9hAa1lqGjWZdrBWn99mX73yU_UsuBXbifbp--cgFwvXOhO-_Qp-xJ0LYjT8G9dIlz805mCNyJiHfKDzYHnbX5rhx_oaeY`
    //         },

    //     })
    //     .then((res) => {
            
    //     })
    //     .catch((error) => {
    //         console.error(error)
    //     })


    // res.json({
    //     hello: "hi!"
    // });
});



app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
