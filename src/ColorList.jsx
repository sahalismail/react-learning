import "./ColorList.css";

export const ColorList = () => {
    const colorData ={
     page: 1,
     per_page: 6,
     total: 12,
     total_pages: 2,
     data: [
        {
            "id": 1,
            "name": "cerulean",
            "year": 2000,
            "color": "#98B2D1",
            "pantone_value": "15-4020"
        },
        {
            "id": 2,
            "name": "fuchsia rose",
            "year": 2001,
            "color": "#C74375",
            "pantone_value": "17-2031"
        },
        {
            "id": 3,
            "name": "true red",
            "year": 2002,
            "color": "#BF1932",
            "pantone_value": "19-1664"
        },
        {
            "id": 4,
            "name": "aqua sky",
            "year": 2003,
            "color": "#7BC4C4",
            "pantone_value": "14-4811"
        },
        {
            "id": 5,
            "name": "tigerlily",
            "year": 2004,
            "color": "#E2583E",
            "pantone_value": "17-1456"
        },
        {
            "id": 6,
            "name": "blue turquoise",
            "year": 2005,
            "color": "#53B0AE",
            "pantone_value": "15-5217"
        }
    ]
    

    }
    return (
        <section>
            <h1>colors!!!</h1>
            <div>
                {colorData.data.map((clr) => (
                    <div>
                        <h3>{clr.name}</h3>
                        <h4>{clr.year}</h4>
                        <div style={{color:clr.color }}>{clr.color}</div>
                        
                    </div>
                ))}
            </div>
        </section>
    );
};
   
    