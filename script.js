document.getElementById('getBlockTemplate').addEventListener('click', function() {
    const url = 'https://bitcoin-rpc.publicnode.com'; // Bitcoin RPC node URL
    const payload = {
        jsonrpc: "2.0",
        method: "getblocktemplate",
        params: [{ rules: ["segwit"] }],
        id: "1"
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('response').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        document.getElementById('response').textContent = 'Error: ' + error.message;
    });
});
