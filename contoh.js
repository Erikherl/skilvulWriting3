//Bab Array
let buah = ['mangga','jeruk','anggur']

console.log(buah)
console.log(buah[0])
console.log(buah[1])
console.log(buah[2])

buah.push("pepaya")
console.log(buah)

buah.shift()
console.log(buah)

buah.unshift("Mangga")
console.log(buah)

let angka = [2,9,1,3,2]
console.log(angka.sort())


let arr =[1,2,3,4,5]
arr.forEach((num,index) => {
    return arr[index] = num *2
})

console.log(arr)

let arr2 =[1,2,3,4,5]
let doubled = arr2.map(num => {
    return num *2
})
console.log(doubled)


//Bab Multidimensional
let inventory = [["Erik", 21],["Beru", 25],["JinWoo",23]]

console.log(inventory)

console.log(inventory[1][0])

inventory.forEach((baris) => {
    baris.forEach((column) => {
        console.log(column)
    })
})

//Bab Object

let person= {
    name: 'Erik',
    age: 21,
    'is Study': true
}

console.log(person)

console.log(person.name)
console.log(person['name'])

person.name = 'Frederik'
person.hobby = 'Masukkin Barang ke Keranjang'

console.log(person)

delete person["is Study"]

console.log(person)

for(let key in person){
    console.log(person[key])
}

let students = [
    {
        name: 'Frederik',
        age: 21,
        isStudent: true,
    },
    {
        name: 'Frederik Wiriawan',
        age: 22,
        isStudent: true,
    },
    {
        name: 'Herlambang',
        age: 23,
        isStudent: true,
    }
]
students.forEach((listStudent) => {
    console.log(listStudent)
})


//Bab Rekrusif

function factorial(num) {
    let results = 1;
  
    for (let i = 2; i <= num; i++) {
      results = results * i;
    }
  
    return results;
  }
  
  console.log(factorial(5));



  function factorial2(num) {
    if (num === 1) {
      return 1;
    } else {
      return num * factorial2(num - 1);
    }
  }
  
  console.log(factorial2(5));


//Bab Asynchronous

function asynchronous(){
    console.log('Stack A')

    setTimeout(() => {console.log('Stack B')}, 1000);

    console.log('Stack C')
}

asynchronous();


let nontonBioskop = new Promise((resolve, reject) => {
    let fail = false;
    if(fail){
        resolve("Yes Nonton, asik!")
    }else{
        reject("Yah gak jadi....")
    }
})
nontonBioskop
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })

