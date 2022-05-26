// data to be sent to the POST request
// INIT

let fileEl = document.querySelector(".file-upload-field");
if (fileEl !== undefined) {
    fileEl.addEventListener("change", function (e) {
        let apiVal = document.querySelector('input'),
            apiKey = apiVal.getAttribute('data-obliv-encrypt'),
            fileEl = document.querySelector(".file-upload-field").value,
            _data = {
                tag: 'obliv-encrypt',
                key: apiKey
            }

        if (apiKey !== undefined) {
            fetch('https://obliviouskey.free.beeceptor.com/users', {
                method: "POST",
                body: JSON.stringify(_data),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            })
                .then(response => response.json())
                .then(json => {
                    let encrypted = CryptoJS.AES.encrypt(fileEl, json.key).toString();
                    console.log(`The encrypted file is ${encrypted}`);
                    document.querySelector("form").style.display = 'none';
                    let encryptedWrapper = document.querySelector(".encrypted-file");
                    encryptedWrapper.innerText = ('Encrytped file is ' + encrypted);
                    //Here we can write logic to push the encrypted file to the server
                });
        }
    });

    //Next steps to decrypt 
    /*var decrypted = CryptoJS.AES.decrypt(encrypted, secretKey).toString(CryptoJS.enc.Utf8);*/
}
