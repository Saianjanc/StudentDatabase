const readline = require("readline-sync");

console.log("Welcome To Student DataBase!");

let studentDetails = [
    {
        Roll_no: 501,
        Name: "Liam Garcia",
        Class: 5,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 502,
        Name: "Ava Robinson",
        Class: 5,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 503,
        Name: "Lucas Cooper",
        Class: 5,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 504,
        Name: "Emma Reed",
        Class: 5,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 505,
        Name: "Mia Hughes",
        Class: 5,
        Gender: "Female",
        test_score: []
    },
    {
    Roll_no: 601,
    Name: "Sophia Smith",
    Class: 6,
    Gender: "Female",
    test_score: []
},
{
    Roll_no: 602,
    Name: "Ethan Johnson",
    Class: 6,
    Gender: "Male",
    test_score: []
},
{
    Roll_no: 603,
    Name: "Ava Williams",
    Class: 6,
    Gender: "Female",
    test_score: []
},
{
    Roll_no: 604,
    Name: "Noah Brown",
    Class: 6,
    Gender: "Male",
    test_score: []
},
{
    Roll_no: 605,
    Name: "Olivia Jones",
    Class: 6,
    Gender: "Female",
    test_score: []
},
{
    Roll_no: 701,
    Name: "Liam Davis",
    Class: 7,
    Gender: "Male",
    test_score: []
},
{
    Roll_no: 702,
    Name: "Emma Martinez",
    Class: 7,
    Gender: "Female",
    test_score: []
},
{
    Roll_no: 703,
    Name: "Mia Wilson",
    Class: 7,
    Gender: "Female",
    test_score: []
},
{
    Roll_no: 704,
    Name: "Lucas Taylor",
    Class: 7,
    Gender: "Male",
    test_score: []
},
{
    Roll_no: 705,
    Name: "Aiden Anderson",
    Class: 7,
    Gender: "Male",
    test_score: []
},
{
    Roll_no: 801,
    Name: "Isabella Thomas",
    Class: 8,
    Gender: "Female",
    test_score: []
},
{
    Roll_no: 802,
    Name: "James White",
    Class: 8,
    Gender: "Male",
    test_score: []
},
{
    Roll_no: 803,
    Name: "Avery Clark",
    Class: 8,
    Gender: "Female",
    test_score: []
},
{
    Roll_no:804,
    Name: "Mason Turner",
    Class: 8,
    Gender: "Male",
    test_score: []
},
{
    Roll_no: 805,
    Name: "Charlotte Harris",
    Class: 8,
    Gender: "Female",
    test_score: []
},
{
    Roll_no: 801,
    Name: "Evelyn Scott",
    Class: 9,
    Gender: "Female",
    test_score: []
},
{
    Roll_no: 802,
    Name: "Logan King",
    Class: 9,
    Gender: "Male",
    test_score: []
},
{
    Roll_no: 803,
    Name: "Harper Turner",
    Class: 9,
    Gender: "Female",
    test_score: []
},
{
    Roll_no: 804,
    Name: "Jackson Lee",
    Class: 9,
    Gender: "Male",
    test_score: []
},
{
    Roll_no: 805,
    Name: "Abigail Baker",
    Class: 9,
    Gender: "Female",
    test_score: []
}
]

function random(){
    return Math.floor(Math.random()*(90-30)+30)
}

function takeTest() {
    let flag = true
    studentDetails.forEach((ele)=>{
        if (!ele.test_score.length){
            ele.test_score.push({sub_name:"physics",marks:random()})
            ele.test_score.push({sub_name:"chemistry",marks:random()})
            ele.test_score.push({sub_name:"maths",marks:random()})
        }
        else{flag=false}
    })
    if (flag){console.log("\nExams Compeleted!!");}
    else{console.log("\nStudents Have Already Taken Test!");}
}

function viewResult() {
    let flag = true
    if (!studentDetails[0].test_score.length) {
        let input = readline.questionInt("The Students Have Not Taken Test\n Do you Want to Take Test?\n1:Yes\n2:No\n")
        if(input==1){
            takeTest()
            studentDetails.forEach((ele)=>{
                if (ele.test_score.length){
                    ele.Total = ele.test_score[0].marks+ele.test_score[1].marks+ele.test_score[2].marks
                    ele.Percentage = Math.round((ele.Total/300)*100)}})
                }
                else{flag=false}
        }
    else{
        studentDetails.forEach((ele)=>{
            if (ele.test_score.length){
        ele.Total = ele.test_score[0].marks+ele.test_score[1].marks+ele.test_score[2].marks
        ele.Percentage = Math.round((ele.Total/300)*100)}})
    }
    if (flag){
        console.table(studentDetails,["Roll_no","Name","Class","Gender","Total","Percentage"])
    }
}

function viewStudentsResult(roll_No) {
    stdObj=studentDetails.find((ele)=>ele.Roll_no==roll_No)
    if (stdObj.test_score.length) {
        if (stdObj.Total>0){console.log(`\nRoll No: ${stdObj.Roll_no} Name: ${stdObj.Name} Class: ${stdObj.Class} Total Marks: ${stdObj.Total} Percentage: ${stdObj.Percentage}`);}
        else{console.log("\nStudent Result Not Found Calculating Result!");
        stdObj.Total=stdObj.test_score[0].marks+stdObj.test_score[1].marks+stdObj.test_score[2].marks
        stdObj.Percentage = Math.round((stdObj.Total/300)*100)
        console.log(`\nRoll No: ${stdObj.Roll_no} Name: ${stdObj.Name} Class: ${stdObj.Class} Total Marks: ${stdObj.Total} Percentage: ${stdObj.Percentage}`);}
    } else {
        console.log("\nThe Student Has not Taken the Test!!");
    }
}

let ch = -1
while (ch!=0) {
    ch=readline.questionInt(`\nDisplay menu :-
Enter:
    1) Take Test
    2) View Result
    3) View Students Result 
    0) Exit\n`)
    switch (ch) {
        case 1:
            takeTest()
            break;
        case 2:
            viewResult()
            break;
        case 3:
            let roll_No=readline.questionInt("Enter Student Roll No: ")
            let flag = true
            studentDetails.forEach((ele)=>{if(ele.Roll_no==roll_No){flag=false}})
        if(flag){console.log("\nInvaild Roll No!");}
            viewStudentsResult(roll_No)
            break;
        default:
            break;
    }
}