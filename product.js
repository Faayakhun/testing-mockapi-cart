const getData = async () => {
    const url = "https://6029dac76c995100176edb9a.mockapi.io/catalog";
    let response = await fetch(url);
    let result = await response.json()
    console.log(result)
    display(result);
}



let display = (result)=>{
    let makananid = document.querySelector("#namaMakanan");
    result.forEach(item =>{

        let cardo = document.createElement("div");
        cardo.innerHTML = `
        <div class="col">
              <div class="card shadow-sm border-dark">
                
              <img style="width: 100%; height: 300px;" src="${item.gambarMakanan}" class="card-img-top" alt="">
              

            

                <div class="card-body">
                  <h5 class="card-title fs-3 fw-normal">${item.nama}</h5>
                  <p class="card-text">${item.desc}</p>
                  <a href="${item.linkWiki}" class="btn btn-dark" target= "_blank">Learn more</a>
                  <button type="button" onclick="addToCart()" class="btn btn-dark">Buy for: Rp.${item.harga}</button>
                  <div class="d-flex justify-content-between align-items-center"> 
                    <small class="text-muted">© NU-SANTARA</small>
                  </div>
                </div>
              </div>
            </div>
        `;
        makananid.appendChild(cardo);

    });
}

getData();
