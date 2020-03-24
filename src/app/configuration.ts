import { isLoweredSymbol } from '@angular/compiler';

export const configuration = {
    header: {
        heading: 'Paper Town',
        headingtext: 'Paper Town is a article based website you can use for your projects. It is made for innovators and engineers, enjoy!',
        buttontext: 'START READING TODAY',
        buttonlink: '\Home'},
    intro: {
        tagline: 'SUCCESS',
        title: 'Expand Your Writing Skills By Reading Articles.',
        // tslint:disable-next-line: max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
        features: [
            // tslint:disable-next-line: max-line-length
            {icon: 'html5' , title: 'HTML5 & CSS3', description: 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choroneglegentur iudico'},
            // tslint:disable-next-line: max-line-length
            {icon: 'bolt', title: 'Easy To Use', description: 'u vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sitdetracto mediocrem disputationi'},
            // tslint:disable-next-line: max-line-length
            {icon: 'tablet', title: 'Fully Responsive', description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum'},
            // tslint:disable-next-line: max-line-length
            {icon: 'rocket', title: 'Parallax Effect', description: 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choroneglegentur iudico'},
        ],
    },
    services: {
        tagline: 'BELIEVING',
        title: 'Focusing On What Matters Most',
        // tslint:disable-next-line: max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
    },
    testimonials: {
        tagline: 'FEEDBACK',
        title: 'What Our Customers Are Saying',
        // tslint:disable-next-line: max-line-length
        description: '',
        feedbacks:[
            // tslint:disable-next-line: max-line-length
            {name: 'John Doe', userImage: 'user-1.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'ABC'},
            // tslint:disable-next-line: max-line-length
            {name: 'Roslyn Doe', userImage: 'user-2.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'PQR'},
            // tslint:disable-next-line: max-line-length
            {name: 'Thomas Doe', userImage: 'user-3.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'XYZ'},
        ]
    },
    clients: {
        tagline: 'TRUST',
        title: 'Companies Who Use Our Services',
        // tslint:disable-next-line: max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
        companies: [
            {name: 'Tree', weblink: 'company-logo1.png', logo: 'company-logo1.png'},
            {name: 'Fingerprint', weblink: 'company-logo2.png', logo: 'company-logo2.png'},
            {name: 'The Man', weblink: 'company-logo3.png', logo: 'company-logo3.png'},
            {name: 'Mustache', weblink: 'company-logo4.png', logo: 'company-logo4.png'},
            {name: 'Goat', weblink: 'company-logo5.png', logo: 'company-logo5.png'},
            {name: 'Justice', weblink: 'company-logo6.png', logo: 'company-logo6.png'},
            {name: 'Ball', weblink: 'company-logo7.png', logo: 'company-logo7.png'},
            {name: 'Cold', weblink: 'company-logo8.png', logo: 'company-logo8.png'},
            {name: 'Apple', weblink: 'company-logo9.png', logo: 'company-logo9.png'},
        ],
    },
    pricing: {
        tagline: 'YOUR CHOICE',
        title: 'We Have The Right Package For You',
        // tslint:disable-next-line: max-line-length
        description: '',
        plans: [
            // tslint:disable-next-line: max-line-length
            {title: 'Personal', subtitle: 'The standard version', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '19', currency: '$', features: {
                // tslint:disable-next-line: max-line-length
                downloads: '5 Downloads', extensions: '2 Extensions', tutorials: 'Tutorials', support: 'Forum Support', updates: '1 year free updates'
            }, buttontext: 'BUY TODAY', buttonlink: '#', featured: false, delay: '0.4s'},
            // tslint:disable-next-line: max-line-length
            {title: 'Student', subtitle: 'Most popular choice', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '29', currency: '$', features: {
                // tslint:disable-next-line: max-line-length
                downloads: '15 Downloads', extensions: '5 Extensions', tutorials:  'Tutorials with Files', support: 'Forum Support', updates: '2 years free updates'
            }, buttontext: 'BUY TODAY', buttonlink: '#', featured: true, delay: '0.6s'},
            // tslint:disable-next-line: max-line-length
            {title: 'Business', subtitle: 'For the whole team', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '49', currency: '$', features: {
                // tslint:disable-next-line: max-line-length
                downloads: 'Unlimited Downloads', extensions: 'Unlimited Extensions', tutorials:  'HD Video Tutorials', support: 'Chat Support', updates: 'Lifetime free updates'
            }, buttontext: 'BUY TODAY', buttonlink: '#', featured: false, delay: '0.8s'},
        ]
    },
    gallery: {
        images: [
            'gallery-image-1.jpg',
            'gallery-image-2.jpg',
            'gallery-image-3.jpg',
            'gallery-image-4.jpg',
            'gallery-image-5.jpg',
            'gallery-image-6.jpg',
        ]
    },
    footer: {
        copyrightText: 'Made with ♡ by',
        developer: 'Nipuna Upeksha',
        developerLink: 'https://github.com/nipunaupeksha'
    },
    socialsites: [
     {title: 'Facebook', target: '_blank', username: 'nipunaupeksha', icon: 'facebook', link: 'https://www.facebook.com/'  },
     {title: 'Google+', target: '_blank', username: 'nipunaupeksha', icon: 'google-plus', link: 'https://www.google.com/+' },
     {title: 'Twitter', target: '_blank', username: 'nipunaupeksha', icon: 'twitter', link: 'https://www.twitter.com/'  },
     {title: 'Instagram', target: '_blank', username: 'nipunaupeksha', icon: 'instagram', link: 'https://www.instagram.com/'  },
     {title: 'behance', target: '_blank', username: 'nipunaupeksha', icon: 'behance', link: 'https://www.behance.net/'  },
    ],
    blog: {
        tagline: 'THOUGHTS',
        title: 'Thoughts Become Things ...',
        posts: [
            // tslint:disable-next-line: max-line-length
            {id: 1, title: 'The First Article', author: 'John Green', image: 'gallery-image-1.jpg', publishdate: '2019-12-23T18:25Z', excert: 'Labore dolor ex aliqua non ex esse mollit officia commodo exercitation irure. ' },
            // tslint:disable-next-line: max-line-length
            {id: 2, title: 'The Second Article', author: 'Nora Roberts', image: 'gallery-image-2.jpg', publishdate: '2019-06-26T18:25Z', excert: 'Labore dolor ex aliqua non ex esse mollit officia commodo exercitation irure. ' },
            // tslint:disable-next-line: max-line-length
            {id: 3, title: 'The Third Article', author: 'Dan Brown', image: 'gallery-image-3.jpg', publishdate: '2019-01-23T18:25Z', excert: 'Labore dolor ex aliqua non ex esse mollit officia commodo exercitation irure. ' },
            // tslint:disable-next-line: max-line-length
            {id: 4, title: 'The Fourth Article', author: 'Gerald Seymour', image: 'gallery-image-4.jpg', publishdate: '2019-02-23T18:25Z', excert: 'Labore dolor ex aliqua non ex esse mollit officia commodo exercitation irure. ' },
            // tslint:disable-next-line: max-line-length
            {id: 5, title: 'The Fifth Article', author: 'Rebecca Culas', image: 'gallery-image-5.jpg', publishdate: '2019-03-23T18:25Z', excert: 'Labore dolor ex aliqua non ex esse mollit officia commodo exercitation irure. ' },
            // tslint:disable-next-line: max-line-length
            {id: 6, title: 'The Sixth Article', author: 'Rebecca Culas', image: 'gallery-image-6.jpg', publishdate: '2019-03-23T18:25Z', excert: 'Labore dolor ex aliqua non ex esse mollit officia commodo exercitation irure. ' },
            // tslint:disable-next-line: max-line-length
            {id: 7, title: 'The Seventh Article', author: 'Rebecca Culas', image: 'gallery-image-1.jpg', publishdate: '2019-03-23T18:25Z', excert: 'Labore dolor ex aliqua non ex esse mollit officia commodo exercitation irure. ' },
            // tslint:disable-next-line: max-line-length
            {id: 8, title: 'The Eigth Article', author: 'Rebecca Culas', image: 'gallery-image-2.jpg', publishdate: '2019-03-23T18:25Z', excert: 'Labore dolor ex aliqua non ex esse mollit officia commodo exercitation irure. ' },
            // tslint:disable-next-line: max-line-length
            {id: 9, title: 'The Ninth Article', author: 'Rebecca Culas', image: 'gallery-image-4.jpg', publishdate: '2019-03-23T18:25Z', excert: 'Labore dolor ex aliqua non ex esse mollit officia commodo exercitation irure. ' },
            // tslint:disable-next-line: max-line-length
            {id: 10, title: 'The Tenth Article', author: 'Rebecca Culas', image: 'gallery-image-6.jpg', publishdate: '2019-03-23T18:25Z', excert: 'Labore dolor ex aliqua non ex esse mollit officia commodo exercitation irure. ' },

        ]
    },
};
