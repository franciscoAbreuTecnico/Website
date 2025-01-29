export const cards = [
    {
        id: 'm01',
        imageSrc: '/images/garage/01.jpg',
        title: '01I',
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. 
                      Ac purus in massa egestas mollis varius; dignissim elementum.`,
        detailsLink: '/garage/details/m01',
        video: '/videos/garage/details/desktop/m01.mp4',
        stats: [
            { name: 'Max Power', value: 39, max: 80, unit: "cv" },
            { name: 'Speed', value: 192, max: 200, unit: "km/h" },
            { name: 'Weight', value: 150, max: 250, unit: "kg" },
            { name: 'Acceleration', value: 4, max: 4, unit: "s" },
            { name: 'Torque', value: 24, max: 40, unit: "Nm" }
        ]
    },
    {
        id: 'm02',
        imageSrc: '/images/garage/02.jpg',
        title: '02E',
        description: `Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.`,
        detailsLink: '/garage/details/m02',
        video: '/videos/garage/details/desktop/sun/m02_sun.mp4',
        stats: [
            { name: 'Max Power', value: 39, max: 80, unit: "kW" },
            { name: 'Speed', value: 160, max: 200, unit: "km/h" },
            { name: 'Weight', value: 150, max: 250, unit: "kg" },
            { name: 'Acceleration', value: 5, max: 5, unit: "s" },
            { name: 'Torque', value: 60, max: 80, unit: "Nm" }
        ]
    },
    {
        id: 'm03',
        imageSrc: '/images/garage/03.jpg',
        title: '03E',
        description: `Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue.`,
        detailsLink: '/garage/details/m03',
        video: '/videos/garage/details/desktop/red/m03_red.mp4',
        stats: [
            { name: 'Max Power', value: 36, max: 80, unit: "kW" },
            { name: 'Speed', value: 178, max: 200, unit: "km/h" },
            { name: 'Weight', value: 150, max: 250, unit: "kg" },
            { name: 'Acceleration', value: 4.2, max: 4.2, unit: "s" },
            { name: 'Torque', value: 90, max: 110, unit: "Nm" }
        ]
    }
];

export const backgrounds = {
    m01: "linear-gradient(180deg, rgba(0, 82, 212, 0.5), rgba(67, 100, 247, 0.5), rgba(111, 177, 252, 0.5))",
    m02: "linear-gradient(180deg, rgba(255, 204, 0, 0.5), rgba(0, 0, 0, 0.7))",
    m03: "linear-gradient(180deg, rgba(255, 0, 0, 0.5), rgba(0, 0, 0, 0.7))"
};

