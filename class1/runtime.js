let current_date = new Date;

function calculatesum(){
  let sum = 0;
  for (let i = 0; i < 1000000000;i++){
    sum = sum +i;
  }
}
const before_date = new Date;
const beforetimeInMs = before_date.getTime();

calculatesum();

const after_date = new Date;
const aftertimeInMs = after_date.getTime();


console.log(aftertimeInMs - beforetimeInMs);