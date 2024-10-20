
const DateParser = async(req, res) =>{
    try{
        let user_input = req.params.date; //e.g 2021-02-04
        if (user_input) {
            if (user_input.includes('-')||user_input.includes(" ")) {
                // Handle date strings (e.g., "2021-02-04")
                let date = new Date(user_input);

                // Check if the date is valid
                if (!isNaN(date.getTime())) {
                    res.json({
                        "unix": date.getTime(),
                        "utc": date.toUTCString()
                    });
                } else {
                    res.json({
                        error: "Invalid Date"
                    });
                }
            } else {
                let date = new Date(parseInt(user_input));

                // Check if the date is valid
                if (!isNaN(date.getTime())) {
                    res.json({
                        "unix": parseInt(user_input), // Return the original Unix timestamp (in milliseconds)
                        "utc": date.toUTCString()     // Return the UTC date string
                    });
                } else {
                    res.json({
                        error: "Invalid Date"
                    });
                }
            }
        }
    }catch(err){
        console.log("error parsing date", err);
    }
}

const currentDate = (req, res)=>{
    try{
        let cur_date  = new Date();
        res.json({
            unix : cur_date.getTime(),
            utc : cur_date.toUTCString()
        })
    }catch(err){
        console.log("error getting current date", err);
    }
}

module.exports = {DateParser, currentDate};