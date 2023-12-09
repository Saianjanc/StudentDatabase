const readline = require("readline-sync");

console.log("Welcome To Student DataBase!");

let checkTest = false

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
const class5 = studentDetails.filter(obj => { return obj.Class == 5 });
const class6 = studentDetails.filter(obj => { return obj.Class == 6 });
const class7 = studentDetails.filter(obj => { return obj.Class == 7 });
const class8 = studentDetails.filter(obj => { return obj.Class == 8 });
const class9 = studentDetails.filter(obj => { return obj.Class == 9 });
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
        console.log("\nClass 5:");
        console.table(class5, ["Roll_no", "Name", "Class", "Gender", "Total", "Percentage"])
        console.log("\nClass 6:");
        console.table(class6, ["Roll_no", "Name", "Class", "Gender", "Total", "Percentage"])
        console.log("\nClass 7:");
        console.table(class7, ["Roll_no", "Name", "Class", "Gender", "Total", "Percentage"])
        console.log("\nClass 8:");
        console.table(class8, ["Roll_no", "Name", "Class", "Gender", "Total", "Percentage"])
        console.log("\nClass 9:");
        console.table(class9, ["Roll_no", "Name", "Class", "Gender", "Total", "Percentage"])
    }
    else { console.log("\nThe Students Have Not Given Test!"); }
}

function computeGrade(classpct) {
    let grade=classpct>=80 ?  'A' :  classpct>=55 && classpct<=80 ?  'B' : classpct>=35 && classpct<=55 ?  'C' :  'D'
    return grade
}

function detailAnalysis() {
    classes[0] = { Class: 5, TotalStd: 5, ClassAvg: 0, ClassPct: 0, Grade:"", PassedStd: 0, PassPct: 0, FailedStd: 0, FailPct:0 }
    classes[1] = { Class: 6, TotalStd: 5, ClassAvg: 0, ClassPct: 0, Grade:"", PassedStd: 0, PassPct: 0, FailedStd: 0, FailPct:0 }
    classes[2] = { Class: 7, TotalStd: 5, ClassAvg: 0, ClassPct: 0, Grade:"", PassedStd: 0, PassPct: 0, FailedStd: 0, FailPct:0 }
    classes[3] = { Class: 8, TotalStd: 5, ClassAvg: 0, ClassPct: 0, Grade:"", PassedStd: 0, PassPct: 0, FailedStd: 0, FailPct:0 }
    classes[4] = { Class: 9, TotalStd: 5,ClassAvg: 0, ClassPct: 0, Grade:"", PassedStd: 0, PassPct: 0, FailedStd: 0, FailPct:0 }
    if (checkTest) {
        classes[0].ClassAvg=class5.reduce((sum,ele)=>sum+ele.Total,0)
        classes[1].ClassAvg=class6.reduce((sum,ele)=>sum+ele.Total,0)
        classes[2].ClassAvg=class7.reduce((sum,ele)=>sum+ele.Total,0)
        classes[3].ClassAvg=class8.reduce((sum,ele)=>sum+ele.Total,0)
        classes[4].ClassAvg=class9.reduce((sum,ele)=>sum+ele.Total,0)

        class5.forEach(ele=>{if (ele.Percentage < 40) { classes[0].FailedStd+=1 } else { classes[0].PassedStd+=1 }})
        class6.forEach(ele=>{if (ele.Percentage < 40) { classes[1].FailedStd+=1 } else { classes[1].PassedStd+=1 }})
        class7.forEach(ele=>{if (ele.Percentage < 40) { classes[2].FailedStd+=1 } else { classes[2].PassedStd+=1 }})
        class8.forEach(ele=>{if (ele.Percentage < 40) { classes[3].FailedStd+=1 } else { classes[3].PassedStd+=1 }})
        class9.forEach(ele=>{if (ele.Percentage < 40) { classes[4].FailedStd+=1 } else { classes[4].PassedStd+=1 }})
        
        for (let i=0;i<5;i++){
        classes[i].ClassAvg = classes[i].ClassAvg/5
        classes[i].PassPct = (classes[i].PassedStd / 5) * 100
        classes[i].FailPct = (classes[i].FailedStd / 5) * 100
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
    topers[0]=class5.sort((a, b) => b.Total - a.Total).slice(0, 3);
    topers[1]=class6.sort((a, b) => b.Total - a.Total).slice(0, 3);
    topers[2]=class7.sort((a, b) => b.Total - a.Total).slice(0, 3);
    topers[3]=class8.sort((a, b) => b.Total - a.Total).slice(0, 3);
    topers[4]=class9.sort((a, b) => b.Total - a.Total).slice(0, 3);
    console.log("\nClass 5:");
    console.table(topers[0], ["Roll_no", "Name", "Class", "Gender", "Total", "Percentage"])
    console.log("\nClass 6:");
    console.table(topers[1], ["Roll_no", "Name", "Class", "Gender", "Total", "Percentage"])
    console.log("\nClass 7:");
    console.table(topers[2], ["Roll_no", "Name", "Class", "Gender", "Total", "Percentage"])
    console.log("\nClass 8:");
    console.table(topers[3], ["Roll_no", "Name", "Class", "Gender", "Total", "Percentage"])
    console.log("\nClass 9:");
    console.table(topers[4], ["Roll_no", "Name", "Class", "Gender", "Total", "Percentage"])
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