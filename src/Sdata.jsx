import React from "react";
const Sdata=[
    {
        sname:"STRANGER THINGS",
        imgscr:"https://www.bing.com/th?id=AMMS_d5ced772554465eac6a535a20bae5fc9&w=180&h=270&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1" ,
        title:"Netflix Original Series",
        links:"https://www.bing.com/search?q=Stranger+Things&filters=ufn%3a%22Stranger+Things%22+sid%3a%22be0827c8-e82e-d589-4703-1cf48b386174%22+catguid%3a%22424cb54b-41a3-c86b-d8e0-3ecef5609ce8_471b382991809411c45c614b6ee75439%22+segment%3a%22generic.carousel%22+secq%3a%22Stranger+Things%22+supwlcar%3a%220%22+segtype%3a%22VFZTaG93LFNvY2lhbEFjdGl2ZQ%3d%3d%22+ctype%3a%220%22+mltype%3a%220%22+eltypedim1%3a%22TVShow%22&ecount=15&FORM=SNAPCR",
    },
    {
        sname:"VIRGIN RIVER",
        imgscr:"https://www.bing.com/th?id=AMMS_b0222b168f46ad5d39920db654234696&w=180&h=270&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1",
        title:"Netflix Original Series",
        links:"https://www.bing.com/search?q=Virgin+River+TV+series&filters=ufn%3a%22Virgin+River+TV+series%22+sid%3a%222348caae-1946-57fa-a0c7-bcc537ab6837%22+catguid%3a%22424cb54b-41a3-c86b-d8e0-3ecef5609ce8_471b382991809411c45c614b6ee75439%22+segment%3a%22generic.carousel%22+secq%3a%22Virgin+River+TV+series%22+supwlcar%3a%220%22+segtype%3a%22VFZTaG93%22+ctype%3a%220%22+mltype%3a%220%22+eltypedim1%3a%22TVShow%22&ecount=15&FORM=SNAPCR",
    },
    {
        sname:"LUCIFER",
        imgscr:"https://www.bing.com/th?id=AMMS_b936ea3ba0cf1a716c078263701ab425&w=180&h=270&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1",
        title:"Netflix Original Series",
        links:"https://www.bing.com/search?q=Lucifer+TV+series&filters=ufn%3a%22Lucifer+TV+series%22+sid%3a%22650e6734-9dee-1285-7671-b2105d9c4b86%22+catguid%3a%22424cb54b-41a3-c86b-d8e0-3ecef5609ce8_471b382991809411c45c614b6ee75439%22+segment%3a%22generic.carousel%22+secq%3a%22Virgin+River+TV+series%22+supwlcar%3a%220%22+segtype%3a%22VFZTaG93LFNvY2lhbEFjdGl2ZQ%3d%3d%22+ctype%3a%220%22+mltype%3a%220%22+eltypedim1%3a%22TVShow%22&ecount=15&FORM=SNAPCR",
    },
    {
        sname:"CROWN",
        imgscr:"https://www.bing.com/th?id=AMMS_57c4445fcaacf67a4a267f740766e6d0&w=180&h=270&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1",
        title:"Netflix Original Series",
        links:"https://www.bing.com/search?q=The+Crown+TV+series&filters=ufn%3a%22The+Crown+TV+series%22+sid%3a%22a431c421-35ad-b3e5-ffb0-56b8f59666a0%22+catguid%3a%22424cb54b-41a3-c86b-d8e0-3ecef5609ce8_471b382991809411c45c614b6ee75439%22+segment%3a%22generic.carousel%22+secq%3a%22Virgin+River+TV+series%22+supwlcar%3a%220%22+segtype%3a%22VFZTaG93%22+ctype%3a%220%22+mltype%3a%220%22+eltypedim1%3a%22TVShow%22&ecount=15&FORM=SNAPCR",
    },
    {
        sname:"OZARK",
        imgscr:"https://www.bing.com/th?id=AMMS_225a3df83a7d80a645803f3de5eef352&w=180&h=270&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1",
        title:"Netflix Original Series",
        links:"https://www.bing.com/search?q=Ozark+TV+series&filters=ufn%3a%22Ozark+TV+series%22+sid%3a%22edac48e6-b388-3644-572c-db1534dc9e3f%22+catguid%3a%22424cb54b-41a3-c86b-d8e0-3ecef5609ce8_471b382991809411c45c614b6ee75439%22+segment%3a%22generic.carousel%22+secq%3a%22Virgin+River+TV+series%22+supwlcar%3a%220%22+segtype%3a%22VFZTaG93LFNvY2lhbEFjdGl2ZQ%3d%3d%22+ctype%3a%220%22+mltype%3a%220%22+eltypedim1%3a%22TVShow%22&ecount=15&FORM=SNAPCR",
    },
   
    {
        sname:"STRANGER THINGS",
        imgscr:"https://www.bing.com/th?id=AMMS_d5ced772554465eac6a535a20bae5fc9&w=180&h=270&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1" ,
        title:"Netflix Original Series",
        links:"https://www.bing.com/search?q=Stranger+Things&filters=ufn%3a%22Stranger+Things%22+sid%3a%22be0827c8-e82e-d589-4703-1cf48b386174%22+catguid%3a%22424cb54b-41a3-c86b-d8e0-3ecef5609ce8_471b382991809411c45c614b6ee75439%22+segment%3a%22generic.carousel%22+secq%3a%22Stranger+Things%22+supwlcar%3a%220%22+segtype%3a%22VFZTaG93LFNvY2lhbEFjdGl2ZQ%3d%3d%22+ctype%3a%220%22+mltype%3a%220%22+eltypedim1%3a%22TVShow%22&ecount=15&FORM=SNAPCR",
    },
    
    {
        sname:"VIRGIN RIVER",
        imgscr:"https://www.bing.com/th?id=AMMS_b0222b168f46ad5d39920db654234696&w=180&h=270&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1",
        title:"Netflix Original Series",
        links:"https://www.bing.com/search?q=Virgin+River+TV+series&filters=ufn%3a%22Virgin+River+TV+series%22+sid%3a%222348caae-1946-57fa-a0c7-bcc537ab6837%22+catguid%3a%22424cb54b-41a3-c86b-d8e0-3ecef5609ce8_471b382991809411c45c614b6ee75439%22+segment%3a%22generic.carousel%22+secq%3a%22Virgin+River+TV+series%22+supwlcar%3a%220%22+segtype%3a%22VFZTaG93%22+ctype%3a%220%22+mltype%3a%220%22+eltypedim1%3a%22TVShow%22&ecount=15&FORM=SNAPCR",
    },
    
    {
        sname:"OZARK",
        imgscr:"https://www.bing.com/th?id=AMMS_225a3df83a7d80a645803f3de5eef352&w=180&h=270&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1",
        title:"Netflix Original Series",
        links:"https://www.bing.com/search?q=Ozark+TV+series&filters=ufn%3a%22Ozark+TV+series%22+sid%3a%22edac48e6-b388-3644-572c-db1534dc9e3f%22+catguid%3a%22424cb54b-41a3-c86b-d8e0-3ecef5609ce8_471b382991809411c45c614b6ee75439%22+segment%3a%22generic.carousel%22+secq%3a%22Virgin+River+TV+series%22+supwlcar%3a%220%22+segtype%3a%22VFZTaG93LFNvY2lhbEFjdGl2ZQ%3d%3d%22+ctype%3a%220%22+mltype%3a%220%22+eltypedim1%3a%22TVShow%22&ecount=15&FORM=SNAPCR",
    },
    {
        sname:"CROWN",
        imgscr:"https://www.bing.com/th?id=AMMS_d5ced772554465eac6a535a20bae5fc9&w=180&h=270&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.5&pid=16.1",
        title:"Netflix Original Series",
        links:"https://www.bing.com/search?q=The+Crown+TV+series&filters=ufn%3a%22The+Crown+TV+series%22+sid%3a%22a431c421-35ad-b3e5-ffb0-56b8f59666a0%22+catguid%3a%22424cb54b-41a3-c86b-d8e0-3ecef5609ce8_471b382991809411c45c614b6ee75439%22+segment%3a%22generic.carousel%22+secq%3a%22Virgin+River+TV+series%22+supwlcar%3a%220%22+segtype%3a%22VFZTaG93%22+ctype%3a%220%22+mltype%3a%220%22+eltypedim1%3a%22TVShow%22&ecount=15&FORM=SNAPCR",
    },
    
    
    
    
]
export default Sdata;













