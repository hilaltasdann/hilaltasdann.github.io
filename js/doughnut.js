$(function(){

    //get the doughnut chart canvas
    var ctx1 = $("#doughnut-chartcanvas-1");

    //doughnut chart data

    var data1 = {
        labels: ["Aracılık ve Hizmet Şirketleri", "Ayakkabıcılık ve Çantacılık", "Bilişim&Teknoloji", "Demir-çelik, Saç, Alüminyum ve Ürünleri", "Elektrik-Elektronik, Kablo", "Gıda","İlaç, Sağlık Hizmetleri", "Lojistik, Kargo, Ulaşım", "Makine Sanayi", "Mimarlık ve Mühendislik", "Saat, Takı ve Mücevheratçılık", "Tekstil, İplik, Dokuma ve Hazır Giyim", "Turizm ve Organizasyon"],
        datasets: [
            {
                label: "TeamA Score",
                data: [156, 37, 316, 10,78, 4, 17, 20, 5, 6, 39, 95, 7],
                backgroundColor: [
                    "#d94848",
                    "#A9A9A9",
                    "#38c5c9",
                    "#F4A460",
                    "#2E8B57",
                    "#DEB887",
                    "#A9A9A9",
                    "#DC143C",
                    "#F4A460",
                    "#2E8B57",
                    "#DEB887",
                    "#A9A9A9",
                    "#DC143C"
                ],
                borderColor: [
                    "#cf4242",
                    "#989898",
                    "#33b3b8",
                    "#E39371",
                    "#1D7A46",
                    "#CDA776",
                    "#989898",
                    "#CB252B",
                    "#E39371",
                    "#1D7A46",
                    "#CDA776",
                    "#989898",
                    "#CB252B",
                    "#E39371",
                    "#1D7A46",
                    "#CDA776",
                    "#989898",
                    "#CB252B"
                ],
                borderWidth: [1, 1, 1, 1, 1]
            }
        ]
    };

    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "bottom",
            text: "Bought Flight Ticket Based on Sector",
            fontSize: 18,
            fontColor: "#111"
        },
        legend: {
            display: false,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 10
            }
        }
    };

    //create Chart class object
    var chart1 = new Chart(ctx1, {
        type: "pie",
        data: data1,
        options: options
    });
});