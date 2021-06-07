const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();
const axios = require('axios');


router.get("/", (req, res) => {    
    // axios.get('http://webcode.me').then(resp => {
    //     console.log(resp.data);
    //     res.send(resp.data)
    // });
    
    axios.get('https://cvp1.moph.go.th/api/ImmunizationTarget?cid=1409900727635&hospital_code=13777',
        {
            headers: {
                'Authorization': `Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbl8xMzc3N0AxMzc3NyIsImlhdCI6MTYyMzExOTc3OCwiZXhwIjoxNjIzMTMwNTc4LCJpc3MiOiJNT1BIIEFjY291bnQgQ2VudGVyIiwiYXVkIjoiTU9QSCBBUEkiLCJjbGllbnQiOnsidXNlcl9pZCI6NTY5OSwidXNlcl9oYXNoIjoiMjlGMEQzRTY0ODlFM0ZCMkFGNDlBQzZCMkUxOUUyMTE3RTQ1OEVGNEVFRUQyMEJFNDRDMTNEMTgzREUxRTAwRDhBQ0VGRkFCIiwibG9naW4iOiJBZG1pbl8xMzc3NyIsIm5hbWUiOiLguJnguLLguIfguKrguLLguKLguKrguKHguKMg4Lil4Li14Lil4LiU4Liy4Lig4Lix4LiX4Lij4LiB4Li44LilIiwiaG9zcGl0YWxfbmFtZSI6IuC5guC4o-C4h-C4nuC4ouC4suC4muC4suC4peC4qOC4o-C4teC4meC4hOC4o-C4tOC4meC4l-C4o-C5jCDguKHguKvguLLguKfguLTguJfguKLguLLguKXguLHguKLguILguK3guJnguYHguIHguYjguJkiLCJob3NwaXRhbF9jb2RlIjoiMTM3NzciLCJlbWFpbCI6InBzYWlzYUBra3UuYWMudGgiLCJjbGllbnRfaXAiOiIxODAuMTgzLjY4LjIwNyIsInNjb3BlIjpbeyJjb2RlIjoiSU1NVU5JWkFUSU9OX1ZJRVc6MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9VUERBVEU6MSJ9LHsiY29kZSI6Ik1PUEhfQUNDT1VOVF9DRU5URVJfQURNSU46MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9QRVJTT05fVVBMT0FEOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fREFTSEJPQVJEOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fU0xPVDoxIn0seyJjb2RlIjoiSU1NVU5JWkFUSU9OX1FVT1RBOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fUkVQT1JUOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fUkVQT1JUX0VYQ0VMOjEifSx7ImNvZGUiOiJJTU1VTklaQVRJT05fQUVGSV9VUERBVEU6MSJ9LHsiY29kZSI6IklNTVVOSVpBVElPTl9TTE9UX01BTkFHRVI6MSJ9XSwicm9sZSI6WyJtb3BoLWFwaSJdLCJzY29wZV9saXN0IjoiW0lNTVVOSVpBVElPTl9WSUVXOjFdW0lNTVVOSVpBVElPTl9VUERBVEU6MV1bTU9QSF9BQ0NPVU5UX0NFTlRFUl9BRE1JTjoxXVtJTU1VTklaQVRJT05fUEVSU09OX1VQTE9BRDoxXVtJTU1VTklaQVRJT05fREFTSEJPQVJEOjFdW0lNTVVOSVpBVElPTl9TTE9UOjFdW0lNTVVOSVpBVElPTl9RVU9UQToxXVtJTU1VTklaQVRJT05fUkVQT1JUOjFdW0lNTVVOSVpBVElPTl9SRVBPUlRfRVhDRUw6MV1bSU1NVU5JWkFUSU9OX0FFRklfVVBEQVRFOjFdW0lNTVVOSVpBVElPTl9TTE9UX01BTkFHRVI6MV0iLCJhY2Nlc3NfY29kZV9sZXZlbDEiOiInMTM3NzcnIiwiYWNjZXNzX2NvZGVfbGV2ZWwyIjoiJyciLCJhY2Nlc3NfY29kZV9sZXZlbDMiOiInJyIsImFjY2Vzc19jb2RlX2xldmVsNCI6IicnIiwiYWNjZXNzX2NvZGVfbGV2ZWw1IjoiJycifX0.uoQGLgoCjRfJF7wg7tLHKoyIq_zPOaZ_-33kX38yYp4btedebslYkd56w-9j1uz4kWv68SFkW2NloaQ8SebZxlSoNR2qHvBmUm_mPBZXy0cdfjbeC34dfSv9uAts_0pnhWHgJpJ_jvzdUA8Uc-hShqHZGJk4z7qZQZ4CzGo_bN3qZyOPbQNWvz904xGvCHIXQAAVuA83kfSoLxtRk7GZJV5CumY7jlHQMcJc_9BwDIJh133H-b8S4jeeN8u5hCccjo1L-56dXsaPrIMIgb-9iiE-MXwBJbTYKrjFFpx9ckzMx3PeKQGtlPIjIPLspgf97KjF7skw5B2LKY3caeP25uAkZ4YeQEJpsyTW74EpxEhuCF5R7GhUQkTygxHGl8nhBOAw33hZ69AH4kwFUFxdIRI3RlHFoIziLRS1seeoHY2GjhEEFMS51LCj3MWBJ5GLddNLiaXkl4u8QcEBTXbsjO53OuTKXbWDF3zrQJoQSWR8O12o2wC7X77aNZ2-AH095V0r6NpLMIw72AkoG7EL6K6_EAjWIMudGI74V9XAGb1aSJQBl2Vgjd8qVXaZkEgDwcml1NS-GQtDsBFxQyXszTl_4nGPoEjxCDXHTdzpOFKgE2XbHRlPm62byIDjOE1VJpL_6u3TemNnYy9_HFlV2K45ICWoPaUoQA2T0GFKnnw`,
                'Content-Type' : `text/plain; charset=utf-8`,
                'Access-Control-Allow-Origin' : `*`
                
            }
        })
        .then((res) => {
            console.log('xxx')
        })
        .catch((error) => {
            console.error(error)
        })

    res.send('xxx3')

    // res.json({
    //     hello: "hi!"
    // });
});



app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
