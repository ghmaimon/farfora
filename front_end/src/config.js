const CURRENT_YEAR = (new Date()).getFullYear();
const truncate = (text) =>{
        let temp = text.split(' ')
        if(temp.length <= 20){
            return text
        }
        else{
            temp =  temp.splice(0,20)
            let res = ''
            for(let i;i<20;i++){
                res+=temp[i]+' ';
                console.log(res)
            }
            return res.trim() + '...'
        }
}

export {
    CURRENT_YEAR,
    truncate,
}