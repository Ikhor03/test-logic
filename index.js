//1.--------------------------
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

//2.--------------------------
function balikKata(kata) {
    let result = []

    for (let i = kata.length - 1; i >= 0; i--) {
        result.push(kata[i])
    }

    return result.join('')
}

console.log("Nomor 2: " + balikKata("abcd"))
console.log("--------------------")

//3.--------------------
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

//4.------------------
let a = 3;
let b = 7;

[a, b] = [b, a]

console.log("Nomor 4: " + "nilai a: ", a, "Nilai b : ", b)
console.log("--------------------")

//5.-------------------
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

//6.-----------------------------
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
console.log("Nomor 6:");
console.log(rangeData([1, 3, 5, 4, 66, 20, 12], 3, 20))
console.log("--------------------")


function countRange() {
    let arr = rangeData([1, 3, 5, 4, 66, 20, 12], 3, 20)

    return arr.length
}

console.log("Nomor 7: ")
console.log(countRange())
console.log("--------------------")


function printKelipatan(int) {
    for (let i = 1; i <= int; i++) {
        if (i % 3 === 0) {
            console.log('Edu')
        } else if (i % 5 === 0) {
            console.log("Work")
        } else {
            console.log(i);
        }
    }
}

console.log("Nomor: 8");
console.log(printKelipatan(15));
console.log("--------------------")

//9.-------------------------
function minMax(arr, req) {
    let result = 0

    let min = Infinity
    let max = -Infinity
    for (let i = 0; i < arr.length; i++) {
        let perArr = arr[i]
        if (req === 'low') {
            if (perArr < min) { 
                [perArr, min] = [min, perArr]
            }
        }

        if (perArr > max) {
            [perArr, max] = [max, perArr]
        }
    }

    return req === 'low' ? min : max
}

// argument kedua melempar request mau output "low" atau "high"
console.log(minMax([4, 2, 6, 88, 3, 11], 'high'))

//10----------------------
function cekTahunKabisat (tahun) {
    if (tahun % 4 === 0) {
        return `${tahun} adalah tahun kabisat`
    } else {
        return `${tahun} bukan tahun kabisat`
    }
}

console.log(cekTahunKabisat(2024))