// LICENCE -----------------------------------------------------------------------------

// Copyright 2023 - Maude Tagand

// Initialize jsPsych -----------------------------------------------------------------
var jsPsych = initJsPsych({
});

// browser exclusion ------------------------------------------------------------------
var browser_check = {
  type: jsPsychBrowserCheck,
  inclusion_function: (data) => {
    return data.browser === 'firefox'|| data.browser === 'chrome' && data.mobile === false
  },
  exclusion_message: (data) => {
    if(data.mobile){
      return "p>You must use a desktop/laptop computer to participate in this experiment.</p>";
    } else if (data.browser !== 'firefox' && data.browser !== 'chrome'){
      return "<p>You must use Chrome or Firefox to complete this experiment.</p>"+
             "<p>If you would like to take part in our study, please copy and paste the experiment link into one of the compatible browsers.</p>";
    }
  }
}

// Create Timeline --------------------------------------------------------------------------
var timeline = [];

// Welcome
var welcome = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
  "<p class='instructions'>Dear participant,</p>" +
  "<p class='instructions'>This study should take about 15 minutes to complete. It is important that you complete the study in one sitting and do not search any information on the Internet during the task.</p>" +
  "<p class='instructions'>You may stop the study at any time. Your answers are anonymous and confidential. " +
  "We are only interested in the statistical trends of the responses, and we will not be able to, nor willing to, identify participants. </p>" +
  "<p class='instructions'>By clicking on \u0022Continue\u0022, you consent to participate in this study.</p>",
  choices: ['Continue']
};

//Instruction Scenario Attention event et non events
var scenario_instruction = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
  "<p class= 'instructions_questionnary'>In this task, you will read short descriptions of events. " +
  "For each event, we ask you to judge whether you believe that these events actually took place.<br>",
  choices: ['Continue']
};

// Conspiracy
var scenario = [
  
 {number: "1",
  name: "tabacco",
  en_name: "tabacco",
  scenario: "A tobacco company conducted laboratory studies to investigate the effects of tobacco on health. These studies revealed the carcinogenic nature of tobacco. Nonetheless, the company and other tobacco industries publicly denied these scientific findings. Instead, they promoted the false benefits of tobacco through misleading advertisements endorsed by doctors.",
  conspiracy: true,
  date: "2013"},

  {number: "2",
  name: "snowden",
  en_name: "snowden",
  scenario: "The US and UK governments employed mass surveillance programs to access citizens' smartphone data, including contacts, text messages, phone conversations, GPS coordinates, and Internet connection data. These practices were based on agreements between major companies such as Apple, Facebook, Google and Microsoft, and national security agencies.",
  conspiracy: true,
  date: "2013"},
  
  {number: "3",
  name: "watergate",
  en_name: "watergate",
  scenario: "The re-election committee of an outgoing US president orchestrated a large-scale operation of political sabotage, including illegal wiretapping, document theft, and intimidation against their political opponents. The president was aware of the operation and attempted to cover it up by concealing facts and obstructing the investigation.",
  conspiracy: true,
  date: "1970"},
   
  {number: "4",
  name: "sang_cont",
  en_name: "blood_cont",
  scenario: "Some French doctors and senior officials knowingly allowed patients to receive HIV-infected blood transfusions based on economic and financial considerations, disregarding moral and health considerations.",
  conspiracy: true,
  date: "1950"},
   
  {number: "5",
  name: "mk_ultra",
  en_name: "mk_ultra",
  scenario: "The US intelligence services established a secret program to develop mind and behaviour manipulation techniques, using drugs, hypnosis, or sensory deprivation. Experimental subjects were recruited without their consent and included psychiatric hospital patients, prisoners, prostitutes, and soldiers.",
  conspiracy: true,
  date: "1940"},
   
  {number: "6",
  name: "irangate",
  en_name: "irangate",
  scenario: "Despite the US government's prohibition on weapons sales to Iran, some government members clandestinely conducted weapons transactions with Iran to negotiate the release of American hostages. The proceeds from these sales were then diverted to finance a rebel group engaged in guerrilla operations in South America.",
  conspiracy: true,
  date: "1980"},
   
  {number: "7",
  name: "dieselgate",
  en_name: "dieselgate",
  scenario: "A car manufacturer tried to bypass environmental regulations by using software to falsify emissions data for some of its vehicles. The software falsified emissions tests to portray the vehicles as less polluting than they actually were.",
  conspiracy: true,
  date: "2015"},
   
  {number: "8",
  name: "adm_Irak",
  en_name: "adm_Irak",
  scenario: "The US government provided false evidence of the presence of mass destruction weapons (including nuclear, chemical, and biological weapons) to justify a military intervention in Iraq.",
  conspiracy: true,
  date: "2003"},
   
  {number: "9",
  name: "campagne_russe",
  en_name: "campaign_russian",
  scenario: "During democratic elections in Germany, the USA, France, the Netherlands, and the UK, actors linked to the Russian government engaged in information manipulation campaigns to polarize debates and influence election results. These activities included hacking and the targeted dissemination of disinformation via social media.",
  conspiracy: true,
  date: "2016"},
   
  {number: "10",
  name: "panama",
  en_name: "panama",
  scenario: "The leaders of several European countries, including Russia, Ukraine, and Iceland, have been implicated in concealing financial activities through the use of shell companies, often for tax evasion purposes.",
  conspiracy: true,
  date: "2016"},
  
  {number: "11",
  name: "cambridge_analytica",
  en_name: "cambridge_analytica",
  scenario: "A British political consulting firm illegally obtained and exploited personal data from social network users for political manipulation and influence purposes. The data were used to create psychological and behavioral profiles for personalized political advertisements during the Brexit debates.",
  conspiracy: true,
  date: "2016"},
   
  {number: "12",
  name: "hacking_team",
  en_name: "hacking_team",
  scenario: "An Italian cybersecurity company turned out to specialize in the development and sale of surveillance software to governments and intelligence services in countries such as Saudi Arabia, Egypt, the United Arab Emirates, Morocco, Sudan and Kazakhstan.",
  conspiracy: true,
  date: "2015"},
   
  {number: "13",
  name: "fifa",
  en_name: "fifa",
  scenario: "In the world of soccer, a vast network of corruption on a global scale involved FIFA executives, sports marketing companies, the media, and government officials. Corruption acts such as bribes, illegal commissions and fraud in various fields were perpetrated. Millions of dollars were secretly exchanged to influence political decisions and enrich those involved.",
  conspiracy: true,
  date: "2015"},
   
  {number: "14",
  name: "tonkin",
  en_name: "tonkin",
  scenario: "To justify military escalation in the Vietnam War, the US administration claimed that US warships had been attacked by the North Vietnamese navy. Actually, these attacks never took place.",
  conspiracy: true,
  date: "1964"},
   
  {number: "15",
  name: "tuskeegee",
  en_name: "tuskeegee",
  scenario: "In a series of studies designed to understand the natural evolution of syphilis, the US Public Health Service and one of its universities concealed their diagnosis from African-American men and made them believe that they were receiving medical care for their condition, when, in fact, these men were left untreated even after the discovery of an effective cure.",
  conspiracy: true,
  date: "1950"},
   
  {number: "16",
  name: "lavon",
  en_name: "lavon",
  scenario: "Israeli intelligence services attempted to carry out a bomb attack on Western facilities in Egypt and to pass it off as attack by Egyptian extremists. The aim was to discredit the Egyptian government and encourage Western countries to maintain their support for Israel.",
  conspiracy: true,
  date: "1960"},
   
  {number: "17",
  name: "ajax",
  en_name: "ajax",
  scenario: "American and British intelligence services orchestrated clandestine actions, propaganda, demonstrations, and political manipulation to foster a coup d'état against the Iranian prime minister who sought to nationalize the country's oil industry. Their aim was to preserve their economic and geopolitical interests in Iran.",
  conspiracy: true,
  date: "1953"},
   
  {number: "18",
  name: "paperclip",
  en_name: "paperclip",
  scenario: "The US secretly integrated Nazi scientists into military and scientific research and development programs, allowing them to escape prosecution and enjoy immunity in exchange for their expertise.",
  conspiracy: true,
  date: "1945-1959"},
   
  {number: "19",
  name: "condor",
  en_name: "condor",
  scenario: "Several Latin American countries, including Argentina, Chile, Paraguay, Uruguay, and Brazil, coordinated efforts to implement cross-border actions of political repression, including surveillance, kidnapping, torture, and assassination of political dissidents and activists suspected of threatening the regimes in power.",
  conspiracy: true,
  date: "1970-1980"},
   
  {number: "20",
  name: "hormone",
  en_name: "hormone",
  scenario: "Growth hormones contaminated with brain-damaging substances were marketed even though French laboratories and health authorities were aware of the contamination risks. The pharmaceutical companies marketing them chose to withhold contamination information for financial reasons.",
  conspiracy: true,
  date: "1980"},
   
  {number: "21",
  name: "indus_sucre",
  en_name: "sugar_indus",
  scenario: "The sugar industry funded research that aimed at minimizing the links between sugar and health problems. These studies were designed to emphasize other factors, such as saturated fats, as primary risk factors for heart disease.",
  conspiracy: true,
  date: "1960"},
  
  {number: "22",
  name: "indus_climat",
  en_name: "climat_indus",
  scenario: "Some major oil companies undertook disinformation campaigns to sow doubt about the reality of climate change and the underlying role of fossil fuels. These companies deliberately downplayed the effects of climate change and exerted pressure to block policies combating global warming.",
  conspiracy: true,
  date: "1960-2010"},
  
  {number: "23",
  name: "rainbow_warrior",
  en_name: "rainbow_warrior",
  scenario: "French intelligence services organized a bomb attack on a Greenpeace ship to halt its activities against French nuclear testing in the Pacific.",
  conspiracy: true,
  date: "1985"},
  
  {number: "24",
  name: "sterilization",
  en_name: "sterilization",
  scenario: "The Peruvian government implemented a program of forced sterilization of thousands of indigenous women to control births within this population.",
  conspiracy: true,
  date: "1990-2000"},
  
  {number: "25",
  name: "chaos",
  en_name: "chaos",
  scenario: "The US intelligence services conducted a secret operation to monitor and infiltrate anti-government groups and movements involved in protests against the Vietnam War.",
  conspiracy: true,
  date: "1960-1970"},
  
  {number: "26",
  name: "afrikaner_broed",
  en_name: "afrikaner_broed",
  scenario: "A South African secret organization composed of descendants of Dutch settlers helped maintain and promote the apartheid system of racial segregation.",
  conspiracy: true,
  date: "1920"},
  
  {number: "27",
  name: "dsk",
  en_name: "dsk",
  scenario: "Political opponents of a French presidential candidate orchestrated his arrest on false charges of sexual assault to discredit him during his presidential campaign.",
  conspiracy: false,
  date: "2011"},
  
  {number: "28",
  name: "somme",
  en_name: "paris_river",
  scenario: "The technical services of the French state deliberately triggered the flooding of a valley upstream from Paris. This action resulted in significant material damage to local populations, done in favor of protecting the capital, which was also threatened by rising waters.",
  conspiracy: false,
  date: "2001"},
  
  {number: "29",
  name: "kennedy",
  en_name: "kennedy",
  scenario: "The US intelligence services orchestrated the assassination of a US president due to disagreements with him, particularly regarding military operations.",
  conspiracy: false,
  date: "NA"},
  
  {number: "30",
  name: "grand_remp",
  en_name: "great_rep",
  scenario: "Some European politicians and intellectuals are encouraging and planning the replacement of European population by people from Africa, with the aim —among others— of destroying white European identities.",
  conspiracy: false,
  date: "NA"},
   
  {number: "31",
  name: "franc_maçon",
  en_name: "freemason",
  scenario: "Members of Masonic lodges belonging to the intellectual and political elite played a leading role in the planning of the French Revolution. They overthrew the monarchy and established a republic to promote their economic interests and consolidate their political power.",
  conspiracy: false,
  date: "1789"},
   
  {number: "32",
  name: "nouvel_ordre_mondial",
  en_name: "new_world_order",
  scenario: "Wealthy and influential families aspire to establish a world government by uniting all nations under centralized economic and media control, to institute a global police state.",
  conspiracy: false,
  date: "NA"},
   
  {number: "33",
  name: "cgmt_cl",
  en_name: "climate_change",
  scenario: "Governments and companies create data on climate change and use them to justify implementing new taxes and regulations, and exert greater control over the economy.",
  conspiracy: false,
  date: "NA"},
   
  {number: "34",
  name: "sida",
  en_name: "aids",
  scenario: "Western countries engineered and disseminated the AIDS virus to harm politically unstable regions, developing countries, and strategically significant areas. The African continent has been among the regions most affected by these practices with the intentional weakening of local populations contributing to their dependency on pharmaceutical companies.",
  conspiracy: false,
  date: "NA"},
   
  {number: "35",
  name: "ben_laden",
  en_name: "ben_laden",
  scenario: "The US secret services orchestrated the arrest and reported the death of Osama bin Laden, the founder of Al Qaeda who actually died several years earlier. This media maneuver aimed at bolstering the popularity of the incumbent president.",
  conspiracy: false,
  date: "2011"},
  
  {number: "36",
  name: "chemtrail",
  en_name: "chemtrail",
  scenario: "The trails left by aircraft contain chemicals whose existence and function are hidden from the public by governments.",
  conspiracy: false,
  date: "NA"},
   
  {number: "37",
  name: "indus_agro",
  en_name: "agro_indus",
  scenario: "The agri-food industries are deliberately poisoning the population to benefit pharmaceutical industries and increase profits.",
  conspiracy: false,
  date: "NA"},
   
  {number: "38",
  name: "11_sept",
  en_name: "sept_11th",
  scenario: "Despite being aware of the preparation of a terrorist attack by Al-Qaeda, the US government allowed events to unfold in order to justify military interventions in the Middle East and thus to defend its financial interests.",
  conspiracy: false,
  date: "2001"},
   
  {number: "39",
  name: "avion",
  en_name: "plane",
  scenario: "The plane crash which resulted in the deaths of the former Polish prime minister and many other government members was organized by the political opposition with the assistance of Russian agents.",
  conspiracy: false,
  date: "2014"},
   
  {number: "40",
  name: "haarp",
  en_name: "haarp",
  scenario: "The US government has access to secret technology enabling it to manipulate weather conditions and induce natural disasters such as storms and cyclones. It uses this technology to create crises and manipulate the media agenda and migratory flows.",
  conspiracy: false,
  date: "NA"},
   
  {number: "41",
  name: "hydroxychloroquine",
  en_name: "hydroxychloroquine",
  scenario: "Albeit being effective against COVID-19, the French government refused to recommend hydroxychloroquine as a treatment to allow pharmaceutical companies to develop vaccines that are more lucrative.",
  conspiracy: false,
  date: "2020"},
   
  {number: "42",
  name: "labo_covid",
  en_name: "labo_covid",
  scenario: "The Chinese government created COVID-19 in a laboratory and deliberately used it as a biological weapon to weaken Western countries economically and geopolitically.",
  conspiracy: false,
  date: "2020"},
   
  {number: "43",
  name: "vaccin_hepatite_B",
  en_name: "hepatite_B_vaccine",
  scenario: "Some scientists have been bribed by pharmaceutical companies to manipulate data and conceal the fact that the hepatitis B vaccine could foster the development of multiple sclerosis.",
  conspiracy: false,
  date: "1990"},
   
  {number: "44",
  name: "lune",
  en_name: "moon",
  scenario: "During the Cold War, the US government and NASA staged the successful Apollo lunar landing missions as a demonstration of force against the Russians.",
  conspiracy: false,
  date: "1969"}, 
   
  {number: "45",
  name: "ogm",
  en_name: "gmo",
  scenario: "Some agri-food companies driven by economic motives continued to market GMOs (genetically modified organisms) after the publication of a scientific report demonstrating their harmfulness.",
  conspiracy: false,
  date: "NA"},
  
  {number: "46",
  name: "loterie",
  en_name: "lottery",
  scenario: "Some governments and secret groups manipulate and rig winning lottery numbers to prevent individuals with modest incomes from becoming wealthy and to take some of the population's money.",
  conspiracy: false,
  date: "NA"},
  
  {number: "47",
  name: "indus_boissons",
  en_name: "beverage_indus",
  scenario: "Some soda companies secretly add caffeine to their recipes to create a dependency on their products and ultimately generate more profits.",
  conspiracy: false,
  date: "NA"},
  
  {number: "48",
  name: "tmps_reaction",
  en_name: "reaction_time",
  scenario: "Some media outlets fabricate the reactions of public figures with whom they politically disagree when these figures appear on television. The aim is to portray them as less competent and, ultimately, to influence public opinion.",
  conspiracy: false,
  date: "NA"},
  
  {number: "49",
  name: "juif",
  en_name: "jew",
  scenario: "Jewish intellectuals, politicians, and businessmen control governments, media and financial institutions to foster the interests of the Jewish community.",
  conspiracy: false,
  date: "NA"},
   
  {number: "50",
  name: "lady_diana",
  en_name: "lady_diana",
  scenario: "At the request of the royal family, the British intelligence services murdered a Princess of Wales, making it seem like a car accident.",
  conspiracy: false,
  date: "1997"},
  
  {number: "51",
  name: "ondes_nocives",
  en_name: "harmful_waves",
  scenario: "To protect their profits, telecom companies conceal scientific data indicating that electromagnetic waves emitted by electronic devices such as cell phones, cell phone antennas, and wireless networks have harmful effects on human health (they can cause cancer, sleep disorders, etc.).",
  conspiracy: false,
  date: "NA"},
  
  {number: "52",
  name: "lsd_cia",
  en_name: "lsd_cia",
  scenario: "As part of a covert operation, the US intelligence services poisoned the inhabitants of a French village with LSD transported by airplane. As a result, 5 people died and 50 were committed.",
  conspiracy: false,
  date: "1951"},
]

true_side = jsPsych.randomization.sampleWithoutReplacement(["true_right", "true_left"], 1);

//Procedure Categorization
var scenario_categorization = {
  type: jsPsychHtmlButtonResponse,
  stimulus: function(){
  return "<p class='instructions'>"+jsPsych.timelineVariable ('scenario')+"</p>" + "<p class='stimuli'>In your opinion, this statement is...<br></p>"},
  choices: function (){
    if (true_side == "true_right"){
      return ["false", "true"]
    } else {
      return ["true", "false"]
    }
  }
}
  
var scenario_procedure = {
  timeline: [scenario_categorization],
  timeline_variables: scenario,
  randomize_order: true,
    data: {
      number: jsPsych.timelineVariable('number'),
      name: jsPsych.timelineVariable('name'),
      en_name: jsPsych.timelineVariable('en_name'),
      group: jsPsych.timelineVariable('conspiracy'),
      date: jsPsych.timelineVariable('date')
    },
  }      
        
//Survey
var reasoning_instruction = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "<p class='instructions_questionnary'>In this section, you will be asked to solve problems  answer some questions about yourself.</p>",
  choices: ['Continue']
}

//crt (Cognitive Reflection Test)
var crt_item = [
{
name: 'crt_1',
item: "A bat and a ball cost £1.10 in total. The bat costs £1.00 more than the ball. How much does the ball cost?",
choices: [
{answer: "5 cents", correct: true},
{answer: "10 cents", correct: false},
{answer: "9 cents", correct: false},
{answer: "1 cent", correct: false}
]
},
{
name: 'crt_2',
item: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
choices: [
{answer: "5 minutes", correct: true},
{answer: "100 minutes", correct: false},
{answer: "20 minutes", correct: false},
{answer: "500 minutes", correct: false}
]
},
{
name: 'crt_3',
item: "In a lake, there is a patch of lily pads. Every day, the patch doubles in size. If it takes 48 days for the patch to cover the entire lake, how long would it take for the patch to cover half of the lake?",
choices: [
{answer: "47 days", correct: true},
{answer: "24 days", correct: false},
{answer: "12 days", correct: false},
{answer: "36 days", correct: false}
]
},
{
name: 'crt_4',
item: "If 3 elves can wrap 3 toys in 1 hour, how many elves are needed to wrap 6 toys in 2 hours?",
choices: [
{answer: "3 elves", correct: true},
{answer: "6 elves", correct: false},
{answer: "12 elves", correct: false},
{answer: "9 elves", correct: false}
]
},
{
name: 'crt_5',
item: "Jerry received both the 15th highest and the 15th lowest mark in the class. How many students are there in the class?",
choices: [
{answer: "29 students", correct: true},
{answer: "30 students", correct: false},
{answer: "1 student", correct: false},
{answer: "15 students", correct: false}
]
},
{
name: 'crt_6',
item: "In an athletics team tall members are three times as likely to win a medal than short members. This year the team has won 60 medals so far. How many of these have been won by short athletes?",
choices: [
{answer: "15 medals", correct: true},
{answer: "20 medals", correct: false},
{answer: "30 medals", correct: false},
{answer: "10 medals", correct: false}
]
}
];

var crt_question = {
type: jsPsychHtmlButtonResponse,
preamble: `Please solve the problem below:`,
stimulus: function(){
  return "<p class='instructions'>"+jsPsych.timelineVariable ('item')},
choices: function() {
  var random_choice = jsPsych.randomization.sampleWithoutReplacement(jsPsych.timelineVariable('choices'));
  return random_choice.map(function(choice){
    return choice.answer;
  })
}
}

var crt_procedure = {
timeline: [crt_question],
timeline_variables: crt_item,
randomize_order: true,
data: {
  name: jsPsych.timelineVariable('name'),
  item: jsPsych.timelineVariable('item'),
  choices: jsPsych.timelineVariable('choices')
}
};

//Questionnary rei
var rei_label = [
"<br>1<br><br>Strongly disagree",
"<br>2",
"<br>3",
"<br>4",
"<br>5",
"<br>6",
"<br>7<br><br>Strongly agree"
];

var rei_an_questionnary = {
type: jsPsychSurveyLikert,
preamble:
"<p class='instructions_questionnary'>For each statement below, please choose the appropriate number to indicate the extent to which you think these statements are true.</br></p>"+
"<p class='instructions_questionnary'>There is no objectively true or false answer, we are interested in your personal opinions.</p>",
questions: [
{prompt: "I don't like to have to do a lot of thinking.", name: 'rei_an_1R', labels: rei_label, required: true},
{prompt: "I try to avoid situations that require thinking in depth about something.", name: 'rei_an_2R', labels: rei_label, required: true},
{prompt: "I prefer to do something that challenges my thinking abilities rather than something that requires little thought.", name: 'rei_an_3', labels: rei_label, required: true},
{prompt: "I prefer complex to simple problems.", name: 'rei_an_4', labels: rei_label, required: true},
{prompt: "Thinking hard and for a long time about something gives me little satisfaction.", name: 'rei_an_5', labels: rei_label, required: true},
],
required_error: "Please, answer all questions.",
button_label: 'Continue'
}

var rei_in_questionnary = {
  type: jsPsychSurveyLikert,
  preamble:
  "<p class='instructions_questionnary'>For each statement below, please choose the appropriate number to indicate the extent to which you think these statements are true.</br></p>"+
  "<p class='instructions_questionnary'>There is no objectively true or false answer, we are interested in your personal opinions.</p>",
  questions: [
  {prompt: "I trust my initial feelings about people.", name: 'rei_in_1', labels: rei_label, required: true},
  {prompt: "I believe in trusting my hunches.", name: 'rei_in_2', labels: rei_label, required: true},
  {prompt: "My initial impressions of people are almost always right.", name: 'rei_in_3', labels: rei_label, required: true},
  {prompt: "When it comes to trusting people, I can usually rely on my gut feelings.", name: 'rei_in_4', labels: rei_label, required: true},
  {prompt: "I can usually feel when a person is right or wrong even if I can't explain how I know.", name: 'rei_in_5', labels: rei_label, required: true},
  ],
  required_error: "Please, answer all questions.",
  button_label: 'Continue'
}

var rei_questionnary_randomization = jsPsych.randomization.sampleWithoutReplacement(["rei_an_first", "rei_in_first"], 1);

var rei_questionnary = {
  timeline: (function(){
    if (rei_questionnary_randomization == "rei_an_first"){
      return [rei_an_questionnary, rei_in_questionnary]
    } else {
      return [rei_in_questionnary, rei_an_questionnary]
    }
  })()
}

//Attention check
var attention_check = {
  type: jsPsychSurveyText,
  questions: [
    {
      prompt: "<p class='instructions_questionnary'>When asked for your favorite color, please enter the word \u0022baguette\u0022 instead in the box below.</p>" +
              "<p class='instructions_questionnary'>Based on the text above, what is your favorite color?</p>",
      name: 'attention_check',
      required: true
    }
  ],
  button_label: 'Continue'
}

var conspiracy_or_reasoning_first_randomization = jsPsych.randomization.sampleWithoutReplacement(["conspiracy_task", "reasoning_task"], 1)[0];

//order
var measures = {
  timeline: (function(){
    if (conspiracy_or_reasoning_first_randomization == "conspiracy_task"){
      return [
        scenario_instruction,
        scenario_procedure,
        attention_check,
        reasoning_instruction,
        crt_procedure,
        ...rei_questionnary]
    } else {
      return [
        reasoning_instruction,
        crt_procedure,
        ...rei_questionnary,
        attention_check,
        scenario_instruction,
        scenario_procedure
      ]
    }
  })()
}


// Demographic Questions
var instruction_demographic_questionnary = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
  "<p class='instructions_questionnary'>You are almost finished with the study. Please answer these last questions.</p>",
  choices: ['Continue']
}
        
var genre = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "<p class='instructions_questionnary'>What gender do you identify as?</p>", 
      options: ["Woman", "Man","Other"],
      name: 'genre',
      required: true,
      horizontal: true
    }
  ],
  required_error: "Please, answer all questions.",
  button_label: 'Continue'
}
          
var age = {
  type: jsPsychSurveyText,
  questions: [
    {
      prompt: "<p class='instructions_questionnary'>How old are you? (in years, just a number, for instance 32)</p>",
      placeholder: 'XX',
      name: 'age',
      required: true
    }
  ],
  required_error: "Please, answer all questions.",
  button_label: 'Continue'
}

var search_check = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "<p class='instructions_questionnary'>Did you research any of the events on the Internet during the task?</p>" +
      "<p class='instructions_questionnary'>Please answer this question honestly. We assure you that your answer will have no impact on your remuneration.</p>", 
      options: ["yes", "no"],
      name: 'research_check',
      required: true,
      horizontal: true
    }
  ],
  required_error: "Please, answer all questions.",
  button_label: 'Continue'
}

var comment = {
  type: jsPsychSurveyText,
  questions: [
    {
      prompt: "<p class='instructions'>Do you have any comments about the study?</p>",
      name: 'comment',
      rows: 5
    }
  ],
  required_error: "Please, answer all questions.",
  button_label: 'Continue'
}

var waiting_demand = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
  "<p class='instructions'>You are now finished with the questions. " +
  "After clicking continue, the data will be saved while loading. " +
  "Please wait until the next page appears to exit. " +
  "Otherwise, we will have no proof that you have completed the study.</p>",
  choices: ['Continue']
}

////prolific ----------------------------------------------------------------------------------
//var prolific = {
//  type: jsPsychHtmlKeyboardResponse,
//  stimulus: "<p class='instructions'>You are finished with the last task. Thanks for participating!</p>"+
//  "<p class='instructions'>Please wait a moment, you will automatically be redirected to prolific.</p>",
//  trial_duration: 3000,
//  choices: "NO_KEYS",
//  on_finish: function(){
//  window.location.href = "https://app.prolific.com/submissions/complete?cc=XXX"; // To complete
//  }
//}
//var prolific_id = jsPsych.data.getURLVariable('PROLIFIC_PID');
//var study_id = jsPsych.data.getURLVariable('STUDY_ID');
//var session_id = jsPsych.data.getURLVariable('SESSION_ID');
//          
//Save data ---------------------------------------------------------------------------------
const subject_id = jsPsych.randomization.randomID(10);
const filename = `${subject_id}.csv`;
const experiment_id = "hNmJVy9vRZK2";

jsPsych.data.addProperties({
  subject_id: subject_id,
  prolific_id: prolific_id,
  study_id: study_id,
  session_id: session_id,
  true_side: true_side,
  rei_questionnary_randomization: rei_questionnary_randomization
})

const save_data = {
  type: jsPsychPipe,
  action: "save",
  experiment_id: experiment_id,
  filename: filename,
  data_string: ()=>jsPsych.data.get().csv()
};

//timeline
timeline.push 
  (browser_check,
  welcome,
  scenario_instruction,
  scenario_procedure,
  attention_check,
  instruction_questionnary,
  crt_procedure,
  rei_questionnary,
  instruction_demographic_questionnary,
  genre,
  age,
  search_check,
  comment,
  waiting_demand,
  save_data,
  //prolific
  )

jsPsych.run(timeline)