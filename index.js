/*
 1. Buatlah fungsi sebagai berikut :
    Apabila terdapat int = 4, maka outputnya 24 (prosesnya : 4*3*2*1)
    Apabila terdapat int = 8, maka outputnya 40320 (prosesnya : 8*7*6*5*4*3*2*1)

*/

//1.
function perkalian(number) {
    let acc = 1
    for (let i = number; i > 0; i--) {
        acc = i * acc
    }
    return acc
}

console.log("--------------------")
console.log("Nomor 1: " + perkalian(8))
console.log("--------------------")

/*
2. Buatlah fungsi untuk reverse sebuah string
    Apabila input = “abcde”, maka outputnya = “edcba”
    Dilarang menggunakan function reverse, buatlah logika sendiri
*/

//2.
function balikKata(kata) {
    let result = []

    for (let i = kata.length - 1; i >= 0; i--) {
        result.push(kata[i])
    }

    return result.join('')
}

console.log("Nomor 2: " + balikKata("abcd"))
console.log("--------------------")

/**
3. Buatlah fungsi untuk menampilkan jumlah digit angka tergantung dimana posisi atau tempat dari angka dalam sebuah string “9.86-A5.321”! 
Contoh: printDigitValue(‘9.86-A5.321’);
Hasil :
9865321
9000000
800000
60000
5000
300
20
1
 */

//3.
function printDigitValue(str) {

    let arr = []
    for (let i = 0; i < str.length; i++) {
        let perStr = str[i]
        if (!isNaN(Number(perStr))) {
            arr.push(perStr)
        }
    }

    let temp = ''
    for (let i = 0; i < arr.length; i++) {
        perArr = arr[i]
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                temp = perArr
            } else {
                temp += '0'
            }
        }
        console.log(temp)
    }

    return arr.join('')
}

console.log("Nomor 3: " + printDigitValue("9.86-A5.321"))
console.log("--------------------")

/**
 
3. Ketik kode untuk swap 2 integer variables tanpa VARIABLE TAMBAHAN 
Contoh : let a = 3, let b = 7 => hasilnya a = 7, b = 3

 */

//4.
let a = 3;
let b = 7;

[a, b] = [b, a]

console.log("Nomor 4: " + "nilai a: ", a, "Nilai b : ", b)
console.log("--------------------")

/*
5. Buatlah fungsi sebagai berikut :
    int : 4, maka outputnya adalah : empat
    int : 20, maka outputnya adalah : dua puluh
    int : 39, maka outputnya adalah : tiga puluh sembilan
    int : 104, maka outputnya adalah : silahkan masukkan bilangan 1-100
*/

//5.
function konversiString(int) {
    let result = 'silahkan masukkan bilangan 1-100'
    let bilanganDasar = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh']

    if (int === 0) {
        return 'Nol'
    }

    if (int <= 10) {
        return bilanganDasar[int - 1]
    }

    if (int === 11) {
        return 'Sebelas'
    } else if (int < 20) {
        return bilanganDasar[int - 11] + 'belas'
    }

    if (int < 100) {
        let puluhan = int.toString()[0]
        let satuan = int.toString()[1]

        if (satuan === "0") {
            return bilanganDasar[puluhan - 1] + ' puluh'
        }

        return bilanganDasar[puluhan - 1] + ' puluh ' + bilanganDasar[satuan - 1]
    }

    if (int === 100) {
        return 'Seratus'
    }

    return result
}

console.log("Nomor 5: " + konversiString(99))
console.log("--------------------")

/*
6. Apabila terdapat sebuah data : 
    array data =  [1,4,7,9,12], 
    int low = 2,
    int high = 15,
    maka akan menghasilkan ouput [4,7,9,12]

*/

//6.
function rangeData(arr, min, max) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let perArr = arr[i]
        if (perArr >= min && perArr <= max) {
            result.push(perArr)
        }
    }

    return result
}

console.log("Nomor 6:" + rangeData([1, 3, 5, 4, 66, 20, 12], 3, 20))
console.log("--------------------")