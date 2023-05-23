var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

// for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    
//     if (noAngkot <= angkotBeroperasi) {
//         console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
//     } else if (noAngkot === 8) {
//         console.log("Angkot No. " + noAngkot + " sedang lembur.")
//     } else {
//         console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
//     }
// }

// ! KONDISI ANGKOT KE 5
// for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    
//     if (noAngkot <= angkotBeroperasi) {
//         console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
//     } else if (noAngkot === 8) {
//         console.log("Angkot No. " + noAngkot + " sedang lembur.")
//     } else if (noAngkot === 10) {
//         console.log("Angkot No. " + noAngkot + " sedang lembur.")
//     } else {
//         console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
//     }
// }

// // ! KONDISI ANGKOT KE 5
// for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    
//     if (noAngkot <= angkotBeroperasi) {
//         console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
//     } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
//         console.log("Angkot No. " + noAngkot + " sedang lembur.")
//     } else {
//         console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
//     }
// }


// ! KONDISI ANGKOT KE 6 ELSE IF
for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    
    if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log("Angkot No. " + noAngkot + " sedang lembur.")
    } else {
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
    }
}


