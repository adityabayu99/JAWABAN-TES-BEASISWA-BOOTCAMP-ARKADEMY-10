function myBiodata(biodata){
  let biodataObj = {
    "name": 'Aditya Bayu Irawan',
    "address": 'Jalan Pengadegan Timur 2',
    "hobbies": [
      'Ngoding', 'Main Game', 'Listening music', 'Adventure' 
    ],
    "is_married": false,
    "school": {
      "highSchool": 'SMAN 1 CARIU',
      "university": '-'
    },
    "skill": [
      {
        "HTML5": "45 %",
        "CSS": "45 %",
        "Javascript": "70 %",
        "VueJS": "10 %",
        "C++": "50 %",
        "Bootstrap": "45 %",
        "GIT": "45 %",
      }
    ]
  }

  return biodataObj
}
console.log(myBiodata('adit'));
