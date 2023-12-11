const readline = require("readline-sync");

console.log("Welcome To Student DataBase!");

let checkTest = false

let studentDetails = [
    {Roll_no: 301,
        Name: "Liam Garcia",
        Class: 3,
        Gender: "Male",
        test_score: []},
    {Roll_no: 302,
        Name: "Liam Garcia",
        Class: 3,
        Gender: "Male",
        test_score: []},
    {
        Roll_no: 303,
        Name: "Liam Garcia",
        Class: 3,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 401,
        Name: "Liam Garcia",
        Class: 4,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 402,
        Name: "Liam Garcia",
        Class: 4,
        Gender: "Male",
        test_score: []
    },
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
        Roll_no: 804,
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
        Roll_no: 901,
        Name: "Evelyn Scott",
        Class: 9,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 902,
        Name: "Logan King",
        Class: 9,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 903,
        Name: "Harper Turner",
        Class: 9,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 904,
        Name: "Jackson Lee",
        Class: 9,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 905,
        Name: "Abigail Baker",
        Class: 9,
        Gender: "Female",
        test_score: []
    }
]
const classList = [...new Set(studentDetails.map((ele)=>ele.Class))]
const separatedByClass = {};
studentDetails.forEach(student => {
    if (!separatedByClass[student.Class]) {
      separatedByClass[student.Class] = [];
    }

    separatedByClass[student.Class].push(student);
  });
// classList.forEach(ele=>classno.push({classid:ele,students:studentDetails.filter(obj => { return obj.Class == ele})}))
let classes = []
let topers = []

function random() {
        return Math.floor(Math.random()*(100-10)+18)
}

function takeTest() {
    let flag = true
    studentDetails.forEach((ele) => {
        if (!ele.test_score.length) {
            ele.test_score.push({ sub_name: "physics", marks: random() })
            ele.test_score.push({ sub_name: "chemistry", marks: random() })
            ele.test_score.push({ sub_name: "maths", marks: random() })
            ele.Total = ele.test_score[0].marks + ele.test_score[1].marks + ele.test_score[2].marks
            ele.Percentage = Math.round((ele.Total / 300)*100)
            checkTest = true
            flag=true
        }
        else { flag = false }
    })
    if (flag) { console.log("\nExams Compeleted!!"); }
    else { console.log("\nStudents Have Already Taken Test!"); }
}

function viewResult() {
    if (checkTest) {console.table(studentDetails, ["Roll_no", "Name", "Class", "Gender", "Total", "Percentage"]) }
    else {let input = readline.questionInt("Students Have Not Taken Test\nDo you Want them to Take Test?\n1:Yes\n2:No\n")
    if (input == 1) {takeTest()
        viewResult()}
  }
}

function viewStudentsResult(roll_No) {
    stdObj = studentDetails.find((ele) => ele.Roll_no == roll_No)
    if (stdObj.test_score.length) {
        if (stdObj.Total > 0) { console.log(`\nRoll No: ${stdObj.Roll_no} Name: ${stdObj.Name} Class: ${stdObj.Class} Total Marks: ${stdObj.Total} Percentage: ${stdObj.Percentage}`); }
        else {
            console.log("\nStudent Result Not Found Calculating Result!");
            stdObj.Total = stdObj.test_score[0].marks + stdObj.test_score[1].marks + stdObj.test_score[2].marks
            stdObj.Percentage = Math.round((stdObj.Total / 300)*100)
            console.log(`\nRoll No: ${stdObj.Roll_no} Name: ${stdObj.Name} Class: ${stdObj.Class} Total Marks: ${stdObj.Total} Percentage: ${stdObj.Percentage}`);
        }
    } else {
        let input = readline.questionInt("The Student Has Not Taken Test\nDo you Want the student to Take Test?\n1:Yes\n2:No\n")
        if (input == 1) {
            stdObj.test_score.push({ sub_name: "physics", marks: random() })
            stdObj.test_score.push({ sub_name: "chemistry", marks: random() })
            stdObj.test_score.push({ sub_name: "maths", marks: random() })
            viewStudentsResult(roll_No)
        }
    }
}

function viewClasswiseResult() {
    if (checkTest) {
        for (const i in classList) {
            let j=classList[i]
            console.log(`\nClass ${j}:`);
            console.table(separatedByClass[j], ["Roll_no", "Name", "Class", "Gender", "Total", "Percentage"])
            }
    }
    else { console.log("\nThe Students Have Not Given Test!"); }
}

function computeGrade(classpct) {
    let grade=classpct>=80 ?  'A' :  classpct>=55 && classpct<=80 ?  'B' : classpct>=35 && classpct<=55 ?  'C' :  'D'
    return grade
}

function detailAnalysis() {
    if (checkTest) {
        for (const i in classList) {
            let j=classList[i]
            classes.push({ Class: separatedByClass[j][0].Class, TotalStd: separatedByClass[j].length, ClassAvg: 0, ClassPct: 0, Grade:"", PassedStd: 0, PassPct: 0, FailedStd: 0, FailPct:0 })
            classes[i].ClassAvg=separatedByClass[j].reduce((sum,ele)=>sum+ele.Total,0)
            separatedByClass[j].forEach(ele=>{if (ele.Percentage < 40) { classes[i].FailedStd+=1 } else { classes[i].PassedStd+=1 }})
            classes[i].ClassAvg = classes[i].ClassAvg/classes[i].TotalStd
            classes[i].PassPct = (classes[i].PassedStd / classes[i].TotalStd) * 100
            classes[i].FailPct = (classes[i].FailedStd / classes[i].TotalStd) * 100
            classes[i].ClassPct = Math.round((classes[i].ClassAvg/300)*100)
            classes[i].Grade = computeGrade(classes[i].ClassPct)
            }
        console.table(classes)
    } else {
        let input = readline.questionInt("Students Have Not Taken Test\nDo you Want them to Take Test?\n1:Yes\n2:No\n")
        if (input == 1) {
            takeTest()
            detailAnalysis()
        }
    }
}

function viewPerformers(){
    if (checkTest) {
        for (const i in classList) {
            let j=classList[i]
            topers[i]=separatedByClass[j].sort((a, b) => b.Total - a.Total).slice(0, 3);
            console.log(`\nClass ${classList[i]}:`);
            console.table(topers[i], ["Roll_no", "Name", "Class", "Gender", "Total", "Percentage"])
        }
   }else{
    let input = readline.questionInt("Students Have Not Taken Test\nDo you Want them to Take Test?\n1:Yes\n2:No\n")
        if (input == 1) {
            takeTest()
            viewPerformers()
        }
   }
}

let ch = -1
while (ch != 0) {
    ch = readline.questionInt(`\nDisplay menu :-
Enter:
    1) Take Test
    2) View Result
    3) View Students Result 
    4) View Classwise Result
    5) Detail Analysis of Result
    6) View Top Performers
    0) Exit\n`)
    switch (ch) {
        case 1:
            takeTest()
            break;
        case 2:
            viewResult()
            break;
        case 3:
            let roll_No = readline.questionInt("Enter Student Roll No: ")
            let flag = true
            studentDetails.forEach((ele) => { if (ele.Roll_no == roll_No) { flag = false } })
            if (flag) { console.log("\nInvaild Roll No!"); }
            else { viewStudentsResult(roll_No) }
            break;
        case 4:
            viewClasswiseResult()
            break;
        case 5:
            detailAnalysis()
            break;
        case 6:
            viewPerformers()
            break;
        case 0:
            console.log("\n Congratulations to All Passed Students!\n");
            break;
        default:
            console.log("\nInvalid Input!");
            break;
    }
}