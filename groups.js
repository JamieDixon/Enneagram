var triadicGroups = [
	{
		name: "Default",
		templateName: "basicTriad",
		groups: [
			{
				name: "Instinctive Triad (Gut or Doing)",
				description: " The Eight, Nine, and One are concerned with maintaining resistance to reality (creating boundaries for the self that asre based on physical tensions). These types tend to have problems with aggression and repression. Underneath their ego defences they carry a great deal of rage",
				members: [8, 9, 1],
				concernedWith: "Resistance and Control of the Environment",
				haveIssuesWith: "Aggression and Repression",
				seeks: "Autonomy",
				underlyingFeeling: "Rage",
				qualities: {
					personality: ["Boundaries", "Tension, numbness", "Defending", "Irritation"],
					essence: ["Connected with life", "Relaxed, open, sensing", "Inner strength", "Grounded", "Acceptance"]
				}

			},
			{
				name: "Feeling Triad (Heart)",
				description: "Types Two, Three, and Four are concerned with self-image (attachment to the false or assumed self of personality). They believe that the stories about theselves and their assumed qualities are their actual identity. Underneath their ego defenses these types carry a great deal of shame",
				members: [2, 3, 4],
				concernedWith: "Love of False Self and Self-Image",
				haveIssuesWith: "Identity and Hostility",
				seeks: "Attention",
				underlyingFeeling: "Shame",
				qualities: {
					personality: ["Self-image", "Stories", "Emotionality", "Holding on to moods", "Adapting to affect others"],
					essence: ["Authenticity", "Truthfulness", "Compassion", "Forgiveness and flow", "Inner-directed"]
				}
			},
			{
				name: "Thinking Triad (Head)",
				description: "TYpes Five, Six, and Seven are converned with anxiety (they experience a lack of support and guidance). They engage in behaviours that they believe will enhance their safety and security. Underneath their ego defenses these types carry a great deal of fear.",
				members: [7, 6, 5],
				concernedWith: "Strategies and Beliefs",
				haveIssuesWith: "Insecurity and Anxiety",
				seeks: "Security",
				underlyingFeeling: "Fear",
				qualities: {
					personality: ["Mental chatter", "Figuring it out", "Strategies, doubt", "Anxiety and fear", "Anticipation"],
					essence: ["Quiet mind", "Inner guidance", "Knowing, clarity", "Support and steadiness", "Open to present moment"]
				},
			}
		],
	},
	{
		name: "Hornevian (Social style)",
		templateName: "hornevian",
		groups: [
			{ 
				name: "Withdrawns",
				description: "",
				members: [5, 9, 4],
				strategyToMeetNeeds: "Withdraws",
			}, 
			{ 
				name: "Compliants",
				description: "",
				members: [6, 1, 2],
				strategyToMeetNeeds: "Earns",
			},
			{
				name: "Assertives",
				description: "",
			 	members: [3, 7, 8], 
			 	strategyToMeetNeeds: "Demands"
			},
		]
	},
	{
		name: "Harmonic (Coping style)",
		templateName: "harmonic",
		groups: [{
			name: "Positive Outlook Group",
			atAGlance: "Deny that they have any problems",
			mainThemesTitles: ["Emphasizes", "Avoids seeing", "Problems with needs"],
			members: [
			{
				number: 2,
				atAGlance: "You have a problem. I am here to help you",
				themes: ["Positive self-image: 'I am a caring, loving person.' They focus on their good intentions",
						  "Their own neediness, disappointment, and anger",
						  "Overemphasis on the needs of others; neglect of their own needs"]
			},
			{
				number: 7,
				atAGlance: "There may be a problem. but I'm fine",
				themes: ["Positive experiences, enjoyment, activity, excitement and fun",
						 "Their pain and emptiness; their role in creating suffering for self and others",
						 "Overemphasis on their own needs. They easily feel burdended by the needs of others"]
			},
			{
				number: 9,
				atAGlance: "What problem? I dont think there is a problem",
				themes: ["The positive qualities of others and of their environment. They idealise their world",
						 "Problems with their loved ones or their environment as well as their own lack of development",
						 "Feeling overwhelmed by their own needs and needs of others. They do not want to deal with either"]
			}
			]
		},
		{
			name: "Competency Group",
			atAGlance: "Cut off feelings and solve problems logically",
			mainThemesTitles: ["Emphasizes", "Manages feelings", "Relation to systems"],
			members: [
			{
				number: 1,
				atAGlance: "I'm sure we can solve this like sensible, mature adults",
				themes: ["Being correct, organised, and sensible. They focus on standards, improving themselves and knowing the rules",
						 "By repression and denial. Feelings are channeled into activity, getting things done perfectly. Feelings are also heald as physical rigidity in the body",
						 "Ones want to work with the system. They try to be a 'good boy or girl' and are irritated with people who disregard the rules"],
			},
			{
				number: 3,
				atAGlance: "There's an efficient solution to this - we just need to get to work",
				themes: ["Being efficient, capable and outstanding. They focus on fgoals, being pragmatic, and knowingg how to present self",
				         "By repression and keeping attention on tasks, staing active. Achievement offsets painful feelings. They look to others for feeling cues",
				         "Threes want to work with the system. But they also like being outside of it - bending rules and finding shortcuts"],
			},
			{
				number: 5,
				atAGlance: "There are a number of hidden issues here: let me think about this",
				themes: ["Being the expert and having deep information. They focus on the process, objective facts, and maintain clarity and detachment",
				         "By splitting off and abstracting feelings, they stay preoccupied and cerebral, as if their feelings were happening to someone else",
				         "Fives reject the system and want to work on their own, outside of it. They have little patience with rules or procedures"],
			},
			],
		},
		{
			name: "Reactive Group",
			atAGlance: "React strongly and need response from others",
			mainThemesTitles: ["Seeks", "Fears", "Deals with others by"],
			members: [
			{
				number: 4,
				atAGlance: "I feel really hurt, and i need to express myself",
				themes: ["A rescuer, someone to understand them and support their life and dreams. They want to be seen.",
				         "Abandonment - that no one will care fot them; that they will not have enhough support to find and become themselves",
				         "Keeping others interested by limiting access, playing 'hard to get,' and holding on to supporters"]
			},
			{
				number: 6,
				atAGlance: "I feel really pressured, and I've got to let off some steam!",
				themes: ["Both independence and support. They want someone to reuly on, but they also need to be 'the stronger one'",
				         "Being abandoned and without sipport, but also becoming too dependent on others",
				         "Being commited and reliable while trying to maintain their indepdencel they are engaging but also defensive"]
			},
			{
				number: 8,
				atAGlance: "I'm angry about this and you're going ot hear about it!",
				themes: ["Independence and self-reliance. They want to need others as little as possible, to be their own person",
				         "Being controlled or dominated by others. Thus, they fear intimacy and becoming vulnerable by trusting or caring too much",
				         "Keeping their guard up, not letting others get too close, and toughening themselves against hurt and their need for others"]
			},
			],
		}],
	},
	{
		name: "Motivational Directionality",
		templateName: "motivationalDir",
		groups: [
			{
				name: "Directions of ego boundaries in the instinctive triad",
				members: [
					{
						number: 8,
						motivationDirection: "Outward",
						description: "Energy directed outward against the environment",
					},
					{
						number: 1,
						motivationDirection: "Inward",
						description: "Energy directed inward against their internal impulses",
					},
					{
						number: 9,
						motivationDirection: "Inward and Outward",
						description: "Energy directed against both inward and outward 'Threats'",
					}
				],
			},
			{
				name: "Focus of self-image in the Feeling Triad",
				members: [
					{
						number: 2,
						motivationDirection: "Outward",
						description: "Self-image presented outwardly to others",
					},
					{
						number: 4,
						motivationDirection: "Inward",
						description: "Self-image presented intwardly to themselves",
					},
					{
						number: 3,
						motivationDirection: "Inward and Outward",
						description: "Self-image presented both to self and to others",
					},
				],
			},
			{
				name: "Directions of 'Flight' in the Thinking Triad",
				members: [
					{
						number: 7,
						motivationDirection: "Outward",
						description: "Flees outward due to fear of aspects of their inner world",
					},
					{
						number: 5,
						motivationDirection: "Inward",
						description: "Flees inward due to feare of aspects of the outside world",
					},
					{
						number: 6,
						motivationDirection: "Inward and Outward",
						description: "Flees inward to avoid external threats and inward to avoid internal fears",
					},
				],
			}
		]
	}
];