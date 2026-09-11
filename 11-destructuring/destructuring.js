// const employee = {
//     name: "Rahul",
//     role: "Angular Developer",
//     experience: 4,
//     city: "Mumbai"
//   };

//   const {name,role,city} = employee
//   console.log(name)
//   console.log(role)
//   console.log(city)

//   const{name : employeeName,role : jobRole,city : location} = employee
//   console.log(employeeName)
//   console.log(jobRole)
//   console.log(location)

//   const skills = ["JavaScript", "TypeScript", "Angular", "RxJS"];

//   const [first,second,third,fourth] = skills
//   console.log(first)
//   console.log(second)
//   console.log(fourth)

//   const user = {
//     names: "Shivani",
//     age: 32
//   };

//   const {names,age,cities="Pune"} = user


//   const employee = {
//     name: "Rahul",
//     address: {
//       city: "Mumbai",
//       state: "Maharashtra"
//     }
//   };

//   const {name,address : {city,state}} = employee



//   const apiResponse = {
//     status: "success",
//     message: "User fetched successfully",
//     data: {
//       user: {
//         id: 101,
//         name: "Shivani",
//         email: "shivani@example.com",
//         role: "Angular Developer",
//         experience: 4,
//         address: {
//           city: "Pune",
//           state: "Maharashtra",
//           country: "India"
//         },
//         skills: [
//           "JavaScript",
//           "TypeScript",
//           "Angular",
//           "RxJS"
//         ],
//         preferences: {
//           theme: "dark",
//           notifications: true
//         }
//       }
//     }
//   };

//   const {
//     data: {
//       user: {
//         name,
//         email,
//         role,
//         address: {
//           city,
//           state
//         },
//         skills: [firstSkill, secondSkill],
//         preferences: {
//           theme,
//           notifications
//         }
//       }
//     }
//   } = apiResponse;

const apiResponse = {
    data: {
      user: {
        name: "Shivani",
        address: {
          city: "Pune"
        },
        skills: ["JavaScript"]
      }
    }
  };

  const {
    data : {
        user : {
            name,
            address : {
                city
            },
            skills : [
                firstSkill,
                secondSkill = "Not available"
            ],
            preferences: {
                theme = "light"
              }        }
    }
  } = apiResponse