const members = [
  {
    id: 1,
    name: "Suryaveer Singh",
    description: "Scitech Secy",
    img: "img/team/matthew.png",
    // contact: "9999999999",
    year: "Fourth Year",
    linkGit: "https://github.com/surya-veer",
    linkLin: "https://www.linkedin.com/in/suryaveer/"
  },
  {
    id: 2,
    name: "Kumar Abhinav",
    description: "Head, PClub\nSenior Member,EClub",
    img: "https://avatars1.githubusercontent.com/u/10851701?s=400&v=4",
    year: "Third Year",
    linkGit: "https://github.com/Abhinav2812",
    linkLin: "https://www.linkedin.com/in/kr-abhinav"
  },
  {
    id: 3,
    name: "Kanishk Sharma",
    description: "Senior Member",
    img: "img/team/KanishkSharma.png",
    year: "Third Year",
    linkGit: "https://github.com/Kanishaksharma11",
    linkLin: "www.linkedin.com/in/kanishkasharma11"
  },
  {
    id: 4,
    name: "Rishikesh",
    description: "Senior Member",
    img: "img/team/matthew.png",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 5,
    name: "Saptarshi Gosh",
    description: "Senior Member",
    img: "img/team/SaptarshiGhosh.png",
    year: "Third Year",
    linkGit: "https://github.com/Saptarshi-Ghosh-98",
    linkLin: "https://www.linkedin.com/in/saptarshi-ghosh-2782b7168/"
  },
  {
    id: 6,
    name: "Saurabh Sharma",
    description: "Senior Member",
    img: "https://media.licdn.com/dms/image/C5103AQHJrifAfH2Wzg/profile-displayphoto-shrink_200_200/0?e=1540425600&v=beta&t=bA2ts-1VDPsuhvSa84OP82MCVCEnkt9gxMz82w-ocK0",
    year: "Third Year",
    linkGit: "https://github.com/saurabhiiti123",
    linkLin: "https://www.linkedin.com/in/saurabh-sharma-592ab8135/"
  },
  {
    id: 7,
    name: "Suyash Bhutara",
    description: "Senior Member",
    img: "img/team/SuyashBhutara.png",
    year: "Third Year",
    linkGit: "https://github.com/Suyash-Bhutara",
    linkLin: "https://www.linkedin.com/in/suyash-bhutara-96786a148/"
  },
  {
    id: 8,
    name: "Jubin Nagpal",
    description: "Member",
    img: "img/team/JubinNagpal.png",
    year: "Second Year",
    linkGit: "https://github.com/jubinnagpal",
    linkLin: "https://www.linkedin.com/in/jubin-n-78b32a120"
  },
  {
    id: 11,
    name: "Nemath Ahmed",
    description: "Member",
    img: "img/team/NemathAhmed.png",
    year: "Second Year",
    linkGit: "https://github.com/nemathahmed",
    linkLin: "https://www.linkedin.com/in/nemath-ahmed-595b335a/"
  },
  {
    id: 12,
    name: "Prayag Jain",
    description: "Member",
    img: "img/team/PrayagJain.png",
    year: "Second Year",
    linkGit: "https://github.com/pjzzz",
    linkLin: ""
  },
  {
    id: 13,
    name: "Saurabh Karkun",
    description: "Member",
    img: "img/team/matthew.png",
    year: "Second Year",
    linkGit: "https://github.com/ksaurabh1729",
    linkLin: ""
  },
  {
    id: 14,
    name: "Shavez Malick",
    description: "Member",
    img: "https://avatars1.githubusercontent.com/u/32036974?s=400&v=4",
    year: "Second Year",
    linkGit: "https://github.com/Deep1Origins",
    linkLin: "https://www.linkedin.com/in/shavez-malick-57a245165/"
  },
  {
    id: 15,
    name: "Vikram Kushwaha",
    description: "Member",
    img: "https://avatars2.githubusercontent.com/u/32036969?s=400&u=8d73a41b708e124bda47542c0964572fa6a0b1e5&v=4",
    year: "Second Year",
    linkGit: "https://github.com/rbnhd",
    linkLin: "www.linkedin.com/in/vikram-kushwaha-47630a16b"
  },

];

const heads = [
  {
    id: 1,
    name: "Sreevatsank",
    description: "Club Head",
    img: "img/team/KSreevatsank.png",
    // contact: "9999999999",
    year: "Third Year",
    linkGit: "https://github.com/sreevatsank1999",
    linkLin: ""
  },
  {
    id: 2,
    name: "Aniket Tiwary",
    description: "Ex-Club Head",
    img: "img/team/matthew.png",
    // contact: "9999999999",
    year: "Fourth Year",
    linkGit: "",
    linkLin: "https://www.linkedin.com/in/sreevatsank-k-285a37161/"
  }
];

Vue.component("member-component", {
  template: `
	<div class="col-lg-3">
		<div class="card">
			<div class="profile-container">
				<img class="card-img-top" :src="member.img" alt="Card image cap">
			</div>
  			<div class="card-body">
    			<h5 class="card-title">{{member.name}}</h5>
				  <p class="card-text">{{member.description}}</p>
				  <p class="card-text mb-2">{{member.year}}</p>
          <a :href="member.linkGit" target="_blank"><i class="fab fa-github"></i> </a>
          <a :href="member.linkLin" target="_blank"><i class="fab fa-linkedin"></i> </a>
  			</div>
		</div>
	</div>
	`,
  props: {
    member: Object
  }
});

Vue.component("head-component", {
  template: `
	<div class="col-lg-4">
		<div class="card">
			<div class="profile-container">
				<img class="card-img-top" :src="head.img" alt="Card image cap">
			</div>
  			<div class="card-body">
	    		<h5 class="card-title">{{head.name}}</h5>
				  <p class="card-text">{{head.description}}</p>
				  <p class="card-text mb-2">{{head.year}}</p>
          <a :href="head.linkGit" target="_blank"><i class="fab fa-github"></i> </a>
          <a :href="head.linkLin" target="_blank"><i class="fab fa-linkedin"></i> </a>
  			</div>
		</div>
	</div>
	`,
  props: {
    head: Object
  }
});

new Vue({
  el: "#app",
  data: {
    members,
    heads
  }
});
