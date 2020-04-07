motorcicle = Motorcicle.create(title: 'Z1000', description: 'Motocicleta de 1000 cc')

section = Section.create(title: 'Capitulo 1', motorcicle: motorcicle)

episodes = Episode.create([
    { 
        title: '1. Kawasaki Z1000', 
        description: 'Motocicleta de alta gama', 
        url: 'https://www.youtube.com/embed/bVmcSfEO9TE',
        section: section
    },
    { 
        title: '2. Kawasaki Z800', 
        description: 'Motocicleta de alta gama', 
        url: 'https://www.youtube.com/embed/bVmcSfEO9TE' ,
        section: section
    },
    { 
        title: '3. Suzuki GSXS 750ZA', 
        description: 'Motocicleta de alta gama', 
        url: 'https://www.youtube.com/embed/bVmcSfEO9TE',
        section: section 
    },
    { 
        title: '4. Kawasaki Z300', 
        description: 'Motocicleta de alta gama', 
        url: 'https://www.youtube.com/embed/bVmcSfEO9TE',
        section: section 
    }
])