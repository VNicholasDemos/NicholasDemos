
import { fromJS } from 'immutable';
import AroundTheHouse from '../../images/AroundTheHouse.jpg';
import AMagicSpell from '../../images/AMagicSpell.jpg';
import CarInSnow from '../../images/CarInSnow.jpg';
import InThesnow from '../../images/InTheSnow.jpg';
import PoliceLights from '../../images/PoliceLights.jpg';
import TombOfHorrors from '../../images/TombOfHorrors.jpg';
import DowntownNight from '../../images/DowntownNight.jpg';
import SantaFight from '../../images/SantaFight.jpg';
import ChristmasMorning from '../../images/ChristmasMorning.jpg';
import MerryChristmas from '../../images/MerryChristmas.jpg';

// Full Action Template
/*

      {
        ID: ,
        ActionStates: [
          {
            StateID: ,
            MusicYTID: '',
            BackgroundId: ,
            ContigentOn: [
              {
                Name: '',
                Value: ,
              },
            ],
            ResponseText:
              '{ "Name": , "Value": ""} ',
            ActionLinks: [
              {
                ContigentOn: [
                  {
                    Name: '',
                    Value: ,
                  },
                ],
                SetParameters: [
                  {
                    Name: '',
                    Value: ,
                  },
                ],
                LinkID: ,
                LinkDesc: '',
              },
            ],
          },
        ],
      },
*/


// around the house: 6uopJ46WsXI, https://i.pinimg.com/originals/0d/df/ab/0ddfabcbc4ccf59ff8df12ec1e054e9c.jpg
// stopping time: 1GLEJEYDdfg, http://wallpapercraft.site/uploads/posts/images/392767-anime-magic-circle-wallpaper.jpg
// in the snow: yKdjSUEHaJ0, https://www.tomswallpapers.com/large/201502/576.jpg
// car scene: http://footage.framepool.com/shotimg/qf/198433080-headlight-wet-country-road-car-ride.jpg
// reindeer fight: gnnTi_UsgaU
// police interdiction: fX4niJeN7LY
// tomb of horrors: 72g7gW7f3TQ
// present fight: Xc2HRnNnK8o
// against the santas: gMOWUT7796o
// against the santas (rock): IbX_8QpVIUs

// present victory lap: PHpaiq18J34
// end credits: bhi-6CG3Fr0


export default fromJS({
  username: '',
  ChangedAudio: false,
  MusicId: '',
  GameMusic: '',
  GameState: {
    CurrentActionId: 1,
    PrevActionId: null,
    VariableStates: [
      {
        Name: 'HasBlueToothSpeaker',
        Value: false,
      },
      {
        Name: 'ShowBlueToothSpeakerText',
        Value: true,
      },
      {
        Name: 'ShowOrdBroomText',
        Value: true,
      },
      {
        Name: 'HasOrdBroom',
        Value: false,
      },
      {
        Name: 'ShowBookCaseFullText',
        Value: true,
      },
      {
        Name: 'ShowBookCaseEmptyText',
        Value: false,
      },
      {
        Name: 'ShowWitchBroomText',
        Value: true,
      },
      {
        Name: 'ShowInitialText',
        Value: true,
      },
      {
        Name: 'ShowPaintingText',
        Value: true,
      },
      {
        Name: 'ShowBoxText',
        Value: true,
      },
      {
        Name: 'HasWitchyBooks',
        Value: false,
      },
      {
        Name: 'HasD&DBooks',
        Value: false,
      },
      {
        Name: 'ShowBooksReminder',
        Value: false,
      },
      {
        Name: "ShowWandText",
        Value: true,
      },
      {
        Name: "ShowYarnText",
        Value: true,
      },
      {
        Name: "HasYarn",
        Value: false,
      },
      {
        Name: "HasWand",
        Value: false,
      },
      {
        Name: "HasCopingBook",
        Value: false,
      },
      {
        Name: "TimeStopped",
        Value: false,
      },
      {
        Name: "ShowOutsideBroomText",
        Value: false,
      },
      {
        Name: "HasWitchyBroom",
        Value: false,
      },
      {
        Name: "HasInitials",
        Value: false,
      },
      {
        Name: "HasPainting",
        Value: false,
      },
      {
        Name: "HasRope",
        Value: false,
      },
      {
        Name: "HasPinecones",
        Value: false,
      },
      {
        Name: "HasReindeerHide",
        Value: false,
      },
      {
        Name: "HasReindeerEgg",
        Value: false,
      },
      {
        Name: "HasAntlers",
        Value: false,
      },
      {
        Name: "HasDanP",
        Value: false,
      },
      {
        Name: "HasPumpkinOil",
        Value: false,
      },
      {
        Name: "HasFamiliar",
        Value: true,
      },
      {
        Name: "HasBadge",
        Value: false,
      },
      {
        Name: "ShowBadgeText",
        Value: true,
      },
      {
        Name: "HasShotgun",
        Value: false,
      },
      {
        Name: "HasRadar",
        Value: false,
      },
      {
        Name: "UsedAntlersOnKnight",
        Value: false,
      },
      {
        Name: "UsedPaintingOnKnight",
        Value: false,
      },
      {
        Name: "UsedRadarOnKnight",
        Value: false,
      },
      {
        Name: "UsedSpeakerOnKnight",
        Value: false,
      },
      {
        Name: "UsedBroomOnKnight",
        Value: false,
      },
      {
        Name: "HasSpaceship",
        Value: false,
      },
      {
        Name: "HasWizardShit",
        Value: false,
      },
      {
        Name: "HasGiftCards",
        Value: false,
      },
      {
        Name: "HasBracers",
        Value: false,
      },
      {
        Name: "HasOrc",
        Value: false,
      },
      {
        Name: "HasSuit",
        Value: false,
      },
      {
        Name: "HasSack",
        Value: false,
      },
      {
        Name: "HasEarrings",
        Value: false,
      },
      {
        Name: "UsedYarn",
        Value: false,
      },
      {
        Name: "UsedFamiliar",
        Value: false,
      },
    ],
  },
  GameInventory: {
    Items: [
      {
        Id: 1,
        GameVariable: 'HasBlueToothSpeaker',
        Description: 'A bluetooth speaker',
      },
      {
        Id: 2,
        GameVariable: 'HasOrdBroom',
        Description: 'An ordinary broom',
      },
      {
        Id: 3,
        GameVariable: 'HasWitchyBooks',
        Description: 'Some witchy books',
      },
      {
        Id: 4,
        GameVariable: 'HasD&DBooks',
        Description: 'Some D&D books',
      },
      {
        Id: 5,
        GameVariable: 'HasYarn',
        Description: 'Wizarding yarn',
      },
      {
        Id: 6,
        GameVariable: 'HasCopingBook',
        Description: 'Coping With Being Adopted by Shari Cohen',
      },
      {
        Id: 7,
        GameVariable: 'HasWitchyBroom',
        Description: 'A witches\' broom',
      },
      {
        Id: 8,
        GameVariable: 'HasInitials',
        Description: 'Light-up L.E.D. initials',
      },
      {
        Id: 9,
        GameVariable: 'HasPainting',
        Description: 'An owl painting',
      },
      {
        Id: 10,
        GameVariable: 'HasRope',
        Description: '50 ft of L.E.D. rope',
      },
      {
        Id: 11,
        GameVariable: 'HasWand',
        Description: 'A shoddy wand',
      },
      {
        Id: 12,
        GameVariable: 'HasPinecones',
        Description: 'A pinecone potpourri',
      },
      {
        Id: 13,
        GameVariable: 'HasReindeerHide',
        Description: 'A magical reindeer hide',
      },
      {
        Id: 14,
        GameVariable: 'HasReindeerEgg',
        Description: 'A magical reindeer egg?',
      },
      {
        Id: 15,
        GameVariable: 'HasAntlers',
        Description: 'An antler hat',
      },
      {
        Id: 16,
        GameVariable: 'HasDanP',
        Description: 'Dallas Cowboys QB Dan Prescott',
      },
      {
        Id: 17,
        GameVariable: 'HasPumpkinOil',
        Description: 'Magic scented pumpkin oil',
      },
      {
        Id: 18,
        GameVariable: 'HasFamiliar',
        Description: 'Your familiar, a black cat named Jonathan P Coltrane',
      },
      {
        Id: 19,
        GameVariable: 'HasBadge',
        Description: 'A wizard cop\'s magic badge',
      },
      {
        Id: 20,
        GameVariable: 'HasShotgun',
        Description: 'Radaghast\'s Relentless Riot-Controller 3000',
      },
      {
        Id: 21,
        GameVariable: 'HasRadar',
        Description: 'A magical radar gun',
      },
      {
        Id: 22,
        GameVariable: 'HasBracers',
        Description: 'Bracers of Defense +2',
      },
      {
        Id: 23,
        GameVariable: 'HasOrc',
        Description: 'Hakram Deadhand',
      },
      {
        Id: 24,
        GameVariable: 'HasSpaceship',
        Description: 'A Magic Cardboard Rocket',
      },
      {
        Id: 25,
        GameVariable: 'HasWizardShit',
        Description: 'Various Wizard Detritus',
      },
      {
        Id: 26,
        GameVariable: 'HasGiftCards',
        Description: 'Astonishingly Cheap Gift Cards',
      },
      {
        Id: 27,
        GameVariable: 'HasSuit',
        Description: 'A Form-Fitting Red Zentai Suit',
      },
      {
        Id: 28,
        GameVariable: 'HasSack',
        Description: 'A Sack Of Infinite Toys',
      },
      {
        Id: 29,
        GameVariable: 'HasEarrings',
        Description: 'Emerald Earrings Of The Christmas Witch',
      },
    ],
  },
  GameFile: {
    Actions: [
      {
        ID: 1,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '6uopJ46WsXI',
            BackgroundId: AroundTheHouse,
            ResponseText:
              'You stand in your kitchen. Through the windows, snow is falling softly in your back yard. Mariah Carey echoes from your tinseled kitchen walls. It\'s the night before Christmas, and you forgot to do any shopping! You have 78 people to shop for! The stores are already closed! A normal person would be freaking <i>right out</i>. Luckily, you have magic powers. What will you do?',
            ActionLinks: [
              {
                LinkID: 2,
                LinkDesc: 'Wiggle your nose and like, summon a million presents or something.',
              },
            ],
          },
        ],
      },
      {
        ID: 2,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '6uopJ46WsXI',
            BackgroundId: AroundTheHouse,
            ResponseText:
              'Okay we should be clear here, you don\'t have omnipotence. You\'re a witch. You can do witchy stuff. You have a wand in your room and you can fly on a broom. You could probably brew a potion but you think there might be laws against that. Maybe look around and see if there\'s something here you can use?',
            ActionLinks: [
              {
                LinkID: 3,
                LinkDesc: 'Okay fine, if you\'re going to railroad me. I look around the room.',
              },
            ],
          },
        ],
      },
      {
        ID: 3,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '6uopJ46WsXI',
            BackgroundId: AroundTheHouse,
            ResponseText:
              'You stand in your kitchen. Through the windows, snow is falling softly in your back yard.'+
              '{ "Name": "ShowBlueToothSpeakerText", "Value": " Winter Wonderland is playing softly from the bluetooth speaker your mother gave you last year."}'+
              '{ "Name": "ShowOrdBroomText", "Value": " There is an ordinary broom near the pantry door."}'+
              'From where you stand, you can see into the library, and down the stairs you can see your rec room. On the kitchen wall you have your shopping list posted. ',
            ActionLinks: [
              {
                ContigentOn: [
                  {
                    Name: 'HasBlueToothSpeaker',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasBlueToothSpeaker',
                    Value: true,
                  },
                  {
                    Name: 'ShowBlueToothSpeakerText',
                    Value: false,
                  },
                ],
                LinkID: 4,
                LinkDesc: 'Take that bluetooth speaker',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasOrdBroom',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasOrdBroom',
                    Value: true,
                  },
                  {
                    Name: 'ShowOrdBroomText',
                    Value: false,
                  },
                ],
                LinkID: 5,
                LinkDesc: 'Take that broom',
              },
              {
                LinkID: 6,
                LinkDesc: 'Examine that shopping list',
              },
              {
                LinkID: 7,
                LinkDesc: 'Go To Library',
              },
              {
                LinkID: 8,
                LinkDesc: 'Go To Rec Room',
              },
            ],
          },
        ],
      },
      {
        ID: 4,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '6uopJ46WsXI',
            BackgroundId: AroundTheHouse,
            ResponseText:
              'Your mom gave you this bluetooth speaker last Christmas. You\'ve used it like, twice, but maybe you can regift it or just listen to some bangin\' christmas tunes while you\'re out and about.',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: '(Back) Yoink',
              },
            ],
          },
        ],
      },
      {
        ID: 5,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '6uopJ46WsXI',
            BackgroundId: AroundTheHouse,
            ResponseText:
              'It\'s an ordinary broom. It is made of thin aluminum, and it has plastic bristles. Usually you sweep the floor with it. Today you will quest with it? You swish it experimentally, like a sword. It bends in the middle a little.',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: '(Back) Oh well, into the bag it goes',
              },
            ],
          },
        ],
      },
      {
        ID: 6,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '6uopJ46WsXI',
            BackgroundId: AroundTheHouse,
            ResponseText:
              '<ui>'+
              '<li>12 nieces humming</li>'+
              '<li>11 nephews fighting</li>'+
              '<li>10 aunts a sleeping</li>'+
              '<li>9 brothers bro’ing</li>'+
              '<li>8 sisters screeching</li>'+
              '<li>7 in-laws hiding</li>'+
              '<li>6 family friends</li>'+
              '<li>5 ULTRAAAAA pareeeeents</li>'+
              '<li>4 little cats</li>'+
              '<li>3 cute dogs</li>'+
              '<li>2 moms and dads</li>'+
              '<li>AND A HUSBAAAAND ON THE P.C.</li>',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: '(Back) You always forget about the ULTRA parents. Every year.',
              },
            ],
          },
        ],
      },
      {
        ID: 7,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '6uopJ46WsXI',
            BackgroundId: AroundTheHouse,
            ResponseText:
              'You are in your extremely festive library. You put up a christmas tree and then enchanted the decorations- some of them spin in place, others glow with a soft inner light, still others flicker between pictures of your family. Wait a minute- this tree isn\'t enchanted at all, those are all normal ornaments! Behind your tree stand your bookcases. On one wall is your front door, on another are the stairs up to your room, and on yet another is the door to the kitchen. '+
              '{ "Name": "ShowBookCaseFullText", "Value": " The bookcase is full of all kinds of books. "}'+
              '{ "Name": "ShowBookCaseEmptyText", "Value": " The bookcase is looking kind of empty."}'+
              '{ "Name": "ShowWitchBroomText", "Value": " Over the door a gnarly witches\' broom is hanging."}',
            ActionLinks: [
              {
                LinkID: 9,
                LinkDesc: 'Examine bookcase',
              },
              {
                LinkID: 3,
                LinkDesc: 'Go To Kitchen',
              },
              {
                LinkID: 10,
                LinkDesc: 'Go To Your Room',
              },
              {
                LinkID: 11,
                LinkDesc: 'Go Outside',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasWitchyBroom',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasWitchyBroom',
                    Value: true,
                  },
                  {
                    Name: 'ShowWitchBroomText',
                    Value: false,
                  },
                  {
                    Name: 'ShowOutsideBroomText',
                    Value: false,
                  },
                ],
                LinkID: 17,
                LinkDesc: 'Get witchy broom',
              },
            ],
          },
        ],
      },
      {
        ID: 8,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '6uopJ46WsXI',
            BackgroundId: AroundTheHouse,
            ResponseText:
              'You are in your rec room. Your long, patchy black stockings have been hung by the chimney with care. It\'s not like you\'re expecting Santa, but if he does come down the fireplace you want him to understand who he\'s dealing with.' +
              '{ "Name": "ShowInitialText", "Value": " On the mantle over your fireplace are some light-up family initials."}'+
              '{ "Name": "ShowPaintingText", "Value": " On the wall hangs a truly horrifying owl painting."}'+
              '{ "Name": "ShowBoxText", "Value": " There is a box here with 50 feet of LED rope."}'+
              ' Behind you are the stairs back up to the kitchen. ',
            ActionLinks: [
              {
                LinkID: 3,
                LinkDesc: 'Go To Kitchen',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasInitials',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasInitials',
                    Value: true,
                  },
                  {
                    Name: 'ShowInitialText',
                    Value: false,
                  },
                ],
                LinkID: 18,
                LinkDesc: 'Get those initials',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasPainting',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasPainting',
                    Value: true,
                  },
                  {
                    Name: 'ShowPaintingText',
                    Value: false,
                  },
                ],
                LinkID: 19,
                LinkDesc: 'Get that painting',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasRope',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasRope',
                    Value: true,
                  },
                  {
                    Name: 'ShowBoxText',
                    Value: false,
                  },
                ],
                LinkID: 20,
                LinkDesc: 'Get that rope',
              },
            ],
          },
        ],
      },
      {
        ID: 9,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '6uopJ46WsXI',
            BackgroundId: AroundTheHouse,
            ContigentOn: [
              {
                Name: 'ShowBookCaseFullText',
                Value: true,
              },
            ],
            ResponseText:
              'You have been collecting books your whole life. Your husband switched over to e-books recently which you think is probably some kind of sacrilege against the dark deities of literacy. Your entire collection is stored on these shelves. Surely some of it will come in handy?',
            ActionLinks: [
              {
                ContigentOn: [
                  {
                    Name: 'HasWitchyBooks',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasWitchyBooks',
                    Value: true,
                  },
                  {
                    Name: 'ShowBooksReminder',
                    Value: false,
                  },
                ],
                LinkID: 12,
                LinkDesc: 'Get witchy books',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasD&DBooks',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasD&DBooks',
                    Value: true,
                  },
                  {
                    Name: 'ShowBookCaseFullText',
                    Value: false,
                  },
                  {
                    Name: 'ShowBookCaseEmptyText',
                    Value: true,
                  },
                ],
                LinkID: 13,
                LinkDesc: 'Get D&D books',
              },
              {
                LinkID: 7,
                LinkDesc: 'Enough browsing.',
              },
            ],
          },
          {
            StateID: 2,
            MusicYTID: '6uopJ46WsXI',
            BackgroundId: AroundTheHouse,
            ContigentOn: [
              {
                Name: 'ShowBookCaseEmptyText',
                Value: true,
              },
            ],
            ResponseText:
              'A-ha! Way in the back there, one lone book stands. Your sister gave you this as a gag and you\'d buried it until now. It\'s definitely time to regift this.',
            ActionLinks: [
              {
                ContigentOn: [
                  {
                    Name: 'HasCopingBook',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasCopingBook',
                    Value: true,
                  },
                ],
                LinkID: 7,
                LinkDesc: '(Back) Get Coping With Being Adopted',
              },
            ],
          },
        ],
      },
      {
        ID: 10,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '6uopJ46WsXI',
            BackgroundId: AroundTheHouse,
            ResponseText:
              'Ah, the old crash pad. Your room is where you do all your best witching.'+
              '{ "Name": "ShowBooksReminder", "Value":" If you\'re going to do something about the snow, this will be the room to do it in, but you\'ve forgotten your rituals. Maybe they\'re in one of your books?"}'+
              '{ "Name": "ShowWandText", "Value": " Your wand sits on your desk, nearly forgotten in all the seasonal chaos."}'+
              '{ "Name": "ShowYarnText", "Value": " Your wizarding yarn is neatly balled in a basket next to your desk."}'+
              ' Behind you are the stairs back down to the Library.',
            ActionLinks: [
              {
                ContigentOn: [
                  {
                    Name: 'TimeStopped',
                    Value: false,
                  },
                  {
                    Name: 'HasWitchyBooks',
                    Value: true,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'TimeStopped',
                    Value: true,
                  },
                ],
                LinkID: 14,
                LinkDesc: 'Cast a spell to deal with the snow',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasYarn',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'ShowYarnText',
                    Value: false,
                  },
                  {
                    Name: 'HasYarn',
                    Value: true,
                  },
                ],
                LinkID: 15,
                LinkDesc: 'Get magical wizarding yarn',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasWand',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'ShowWandText',
                    Value: false,
                  },
                  {
                    Name: 'HasWand',
                    Value: true,
                  },
                ],
                LinkID: 16,
                LinkDesc: 'Get ye wand',
              },
              {
                LinkID: 7,
                LinkDesc: 'Go To the Library',
              },
            ],
          },
        ],
      },
      {
        ID: 11,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'yKdjSUEHaJ0',
            BackgroundId: InThesnow,
            ContigentOn: [
              {
                Name: 'TimeStopped',
                Value: false,
              },
            ],
            ResponseText:
              'It\'s absolutely freezing out here, and pitch black. You can see to the end of your driveway but the snow is starting to come down too thickly to fly. If only you had some way to stop it!',
            ActionLinks: [
              {
                LinkID: 7,
                LinkDesc: 'Go Back Inside',
              },
            ],
          },
          {
            StateID: 2,
            MusicYTID: 'yKdjSUEHaJ0',
            BackgroundId: InThesnow,
            ContigentOn: [
              {
                Name: 'TimeStopped',
                Value: true,
              },
            ],
            ResponseText:
              'Snow hangs in the air. All is stillness. Even light seems to have slowed down. moving through the winter night is like pushing through a chill soup. Not that you\'ve pushed through a lot of chilled soups, but you imagine this is what it would feel like.'+
              '{ "Name": "ShowOutsideBroomText", "Value":"You\'re still going to need transport."}'+
              '{ "Name": "HasWitchyBroom", "Value": "You ready your broom, and take a deep breath. Probably should have figured out how to fly before now, but no time for regrets!"}',
            ActionLinks: [
              {
                LinkID: 7,
                LinkDesc: 'Go Back Inside',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasWitchyBroom',
                    Value: true,
                  },
                ],
                LinkID: 21,
                LinkDesc: '(witchy broom) Flyyyyy, my pretty!',
              },
            ],
          },
        ],
      },
      {
        ID: 12,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '6uopJ46WsXI',
            BackgroundId: AroundTheHouse,
            ResponseText:
              'Books on witching! You\'ve got all the classics: The Gardnerian Book of Shadows, The Shatnerian Book of Gardening, The Golden Bough, The Orangeish Peanut. You already know all this stuff. But it never hurts to have a reference on hand, right?',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'You can cast any of the spells on the list. Any of the first level ones.',
              },
            ],
          },
        ],
      },
      {
        ID: 13,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '6uopJ46WsXI',
            BackgroundId: AroundTheHouse,
            ResponseText:
              'You never know when you\'re going to need to spin up a game on the fly. Plenty of room in the bag, better to be safe than sorry!',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'You always end up playing a druid for some reason.',
              },
            ],
          },
        ],
      },
      {
        ID: 14,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '1GLEJEYDdfg',
            BackgroundId: AMagicSpell,
            ResponseText:
              'Using your witchy books, you carefully lay wizard\'s yarn in the three sacred geometric patterns. Unfortunately halfway through, Jonathan P Coltrane decides the yarn would be better rearranged <i>this</i> way, and pulls half of it out of place. It takes forever to get it back but you\'re pretty sure you got it all in the right places. Like, 80% sure. Some of the fuzz is beginning to blow in an ethereal wind that you can\'t feel, and that\'s probably a good sign right?',
            ActionLinks: [
              {
                LinkID: 1401,
                LinkDesc: 'Right!',
              },
            ],
          },
        ],
      },
      {
        ID: 1401,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '1GLEJEYDdfg',
            BackgroundId: AMagicSpell,
            ResponseText:
              'Now, which spell would be best? You scan your books. A-ha! Right there in Alistair Crowley\'s "A Very Special Christmas," the solution to all your problems- a time stop spell! There\'s a note at the bottom of the page: <b>Warning- only works when narratively convenient.</b> Wonder what that means?',
            ActionLinks: [
              {
                LinkID: 1402,
                LinkDesc: 'I\'m sure it\'s fine, on with the spell!!',
              },
            ],
          },
        ],
      },
      {
        ID: 1402,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '1GLEJEYDdfg',
            BackgroundId: AMagicSpell,
            ResponseText:
              'A choir of ghostly children\'s voices carries faintly through the breeze as you begin your dark yule tidings. You begin the magic chant:'+
              '<p>It was December 24th on Hollis ave in the dark/ When I see a man chilling with his dog in the park</p>'+
              '<p>I approached very slowly with my heart full of fear/ Looked at his dog, oh my god, an ill reindeer</p>',
            ActionLinks: [
              {
                LinkID: 1403,
                LinkDesc: 'This seems familiar',
              },
            ],
          },
        ],
      },
      {
        ID: 1403,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '1GLEJEYDdfg',
            BackgroundId: AMagicSpell,
            ResponseText:
              'A purple glow emanates from nowhere and illuminates nothing. The children\'s voices grow louder. You continue the magic chant:'+
              '<p>But then I was illin because the man had a beard/ And a bag full of goodies, 12 o\'clock had neared</p>'+
              '<p>So I turned my head a second and the man had gone/ But he left his driver\'s wallet smack dead on the lawn</p>'+
              '<p>I picked the wallet up then I took a pause/ Took out the license and it cold said "Santa Claus"</p>',
            ActionLinks: [
              {
                LinkID: 1404,
                LinkDesc: 'Is that... is that Christmas In Hollis by Run DMC?',
              },
            ],
          },
        ],
      },
      {
        ID: 1404,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '1GLEJEYDdfg',
            BackgroundId: AMagicSpell,
            ResponseText:
              'It\'s good that you know all of DMC\'s songs by heart, because you\'re having trouble focusing on the pages in the raging Un-Storm that is Not-Blowing through your room. You shout your way through, until you reach the final lines.'+
              '<p>"The time is now, the place is here/ And the whole wide world is filled with cheer</p>'+
              '<p>My name\'s d.m.c. with the mic in my hand/ And I\'m chilling and coolin just like a snowman</p>'+
              '<p>So open your eyes, lend us an ear/ We want to say <b>merry christmas and happy new year!</b></p>',
            ActionLinks: [
              {
                LinkID: 1405,
                LinkDesc: 'Did Crowley anticipate DMC, or were DMC paying tribute to Crowley? We will never know.',
              },
            ],
          },
        ],
      },
      {
        ID: 1405,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '1GLEJEYDdfg',
            BackgroundId: AMagicSpell,
            ResponseText:
              'With a tremendous <b>BANG</b> the book snaps shut, and the yarn is sucked into a tight ball at the center of your circle. The music cuts out, and the world goes still. Outside your window, you can see the snow- it has paused in midair, suspended as though in a thick liquid. The world has has stopped. It is one hour before Christmas, but now you\'ve got all the time you need.',
            ActionLinks: [
              {
                LinkID: 10,
                LinkDesc: 'Time to get moving.',
              },
            ],
          },
        ],
      },
      {
        ID: 15,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '6uopJ46WsXI',
            BackgroundId: AroundTheHouse,
            ResponseText:
              'Wizard\'s yarn is shorn from void sheep- it\'s a real process involving demonic mayonaise and a dwarf from another planet, it\'s best not to get into it here. It is extremely magically conductive and good for all sorts of spells. You know this will come in handy on your adventure somehow.',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'One of these days I should really finish that community center',
              },
            ],
          },
        ],
      },
      {
        ID: 16,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '6uopJ46WsXI',
            BackgroundId: AroundTheHouse,
            ResponseText:
              'Every witch\'s last resort- at least since Harry Potter came out. After that nobody really wanted to be seen with one of these, it seemed too tropey. Your wand has seen better days- you can probably get one spell off, but then it\'s definitely going to disintegrate. Still, better one shot than none, right?',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'Accio wand!',
              },
            ],
          },
        ],
      },
      {
        ID: 17,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '6uopJ46WsXI',
            BackgroundId: AroundTheHouse,
            ResponseText:
              'Your actual witchy broom hangs over the door. It is made of gnarled pine with colored straw bristles. You definitely did not buy this off of Etsy. You\'ve also never flown before, but how hard could that be? It\'s just like walking, with an extra dimension.',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'It\'s not the fall, it\'s the stop at the end that gets you',
              },
            ],
          },
        ],
      },
      {
        ID: 18,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '6uopJ46WsXI',
            BackgroundId: AroundTheHouse,
            ResponseText:
              'Every family needs some light-up LED initials somewhere in the house. In case they ever forget their own names, you guess? Look they were cheap and the mantle was kind of empty.',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'If nothing else they will work as backup I.D.',
              },
            ],
          },
        ],
      },
      {
        ID: 19,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '6uopJ46WsXI',
            BackgroundId: AroundTheHouse,
            ResponseText:
              'You painted this at one of those wine-and-paint events. To be honest you were mostly there for the wine. It was supposed to be a knock-off Mona Lisa but you went off script and painted an owl with a creepy smile instead. It made the instructor visibly uncomfortable. Maybe you can fob this off on someone, as a gift?',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'Or you can use it to scare local wildlife',
              },
            ],
          },
        ],
      },
      {
        ID: 20,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '6uopJ46WsXI',
            BackgroundId: AroundTheHouse,
            ResponseText:
              'You got this in one of those woot.com sales. Just think of the value! <i>Please</i> think of the value! Otherwise, you have to think of where you\'re going to hang 50 feet of blindingly bright plastic rope.',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'I should probably get some actual rope at some point',
              },
            ],
          },
        ],
      },
      {
        ID: 21,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'yKdjSUEHaJ0',
            BackgroundId: InThesnow,
            ResponseText:
              'With a broomy sort of whoosh, you leap into the air. The still night air begins to rush past you as you zoom up and over the rooftops of your neighbors. You\'re flying! On a very small stick, now that you really think about it! You hunch down and hold on tightly. Before you know it, you\'re whipping past the treetops of the pine woods near your house. Off to adventure!',
            ActionLinks: [
              {
                ContigentOn: [
                  {
                    Name: 'HasPinecones',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasPinecones',
                    Value: true,
                  },
                ],
                LinkID: 22,
                LinkDesc: 'Make a pinecone potpourri',
              },
              {
                LinkID: 23,
                LinkDesc: 'Fly on',
              },
            ],
          },
        ],
      },
      {
        ID: 22,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'yKdjSUEHaJ0',
            BackgroundId: InThesnow,
            ResponseText:
              'A brilliant plan! You hold your handy sack of holding out beneath you, scooping many pinecones and possibly a couple of time-stopped squirrels into a pile within. You can easily make a festive potpourri with these! I mean, you might have to pick out some squirrel droppings later, but a gift\'s a gift!',
            ActionLinks: [
              {
                LinkID: 23,
                LinkDesc: 'Kind of sticky, too',
              },
            ],
          },
        ],
      },
      {
        ID: 23,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'gnnTi_UsgaU',
            BackgroundId: InThesnow,
            ResponseText:
              'As you sail over the forest, you see an odd sight. A very large man is caught in your time stop spell on the ground below, frozen in the act of fleeing for his life from some terrible monster! Unfortunately the creature appears to have been magical, because it was unaffected by the spell. It\'s closing in on him now, murder in its giant beady eyes.',
            ActionLinks: [
              {
                LinkID: 24,
                LinkDesc: 'Help the mysterious and burly stranger',
              },
            ],
          },
        ],
      },
      {
        ID: 24,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'gnnTi_UsgaU',
            BackgroundId: InThesnow,
            ResponseText:
              'The monster- it\'s a reindeer! And it can fly! It sees you swooping in and leaps up in the air to meet you, its hooves raising <i>such</i> a clatter. It doesn\'t have a bright red nose, but there\'s enough blood on those extremely sharp looking antlers that you feel like you might be in trouble. You\'ve only got a second before it spears you, what will you do?',
            ActionLinks: [
              {
                ContigentOn: [
                  {
                    Name: 'HasWand',
                    Value: true,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasWand',
                    Value: false,
                  },
                ],
                LinkID: 25,
                LinkDesc: 'Use wand',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasD&DBooks',
                    Value: true,
                  },
                ],
                LinkID: 26,
                LinkDesc: 'Use D&D sourcebooks',
              },
            ],
          },
        ],
      },
      {
        ID: 25,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'gnnTi_UsgaU',
            BackgroundId: InThesnow,
            ResponseText:
              'You quickdraw your wand like the witch wandslingers of old. With a swish and a flick you cast Petrificus Totalus which turns the deer from a barreling 700 pound missile into an <i>uncontrolled, frozen</i> 700 pound missile. Luckily you swoosh out of the way as it goes flying past, impacting heavily with the ground below. Unluckily, your wand has shattered in your hands- well, it was getting on in years. Let\'s hope you don\'t need it for anything later!',
            ActionLinks: [
              {
                LinkID: 27,
                LinkDesc: 'Uh... victory!',
              },
            ],
          },
        ],
      },
      {
        ID: 26,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'gnnTi_UsgaU',
            BackgroundId: InThesnow,
            ResponseText:
              'Thinking quickly, you pull out the D&D sourcebooks you took from your library. Surely this thing\'s weakness will be in here- you start searching under "Giant Elk" but it looks like it\'s just a low level powerhouse. Before you can read more than a paragraph, the reindeer is upon you! Those dangerous antlers spear right through your book and get stuck. The deer, unable to see with visions of beholders dancing in front of it, goes berserk and begins racing wildly through the forest. It soon collides with a tree and breaks its neck. Your book is totally ruined.',
            ActionLinks: [
              {
                LinkID: 27,
                LinkDesc: 'Uh... victory!',
              },
            ],
          },
        ],
      },
      {
        ID: 27,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'gnnTi_UsgaU',
            BackgroundId: InThesnow,
            ResponseText:
              'You hover in the air, surveying the carnage in the aftermath of your victory over the murderous reindeer. The body lies where it fell, a large and steaming crater marking its passage into deer Valhalla. Why was it so angry anyway? Maybe that guy you froze with your spell knows. Oh well, at least you can get some loot out of this disaster, right?',
            ActionLinks: [
              {
                ContigentOn: [
                  {
                    Name: 'HasReindeerHide',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasReindeerHide',
                    Value: true,
                  },
                ],
                LinkID: 28,
                LinkDesc: 'Get magical reindeer hide',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasReindeerEgg',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasReindeerEgg',
                    Value: true,
                  },
                ],
                LinkID: 29,
                LinkDesc: 'Get magical reindeer... egg?',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasAntlers',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasAntlers',
                    Value: true,
                  },
                ],
                LinkID: 30,
                LinkDesc: 'Get magical reindeer antlers',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasDanP',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasDanP',
                    Value: true,
                  },
                ],
                LinkID: 31,
                LinkDesc: 'Talk to mysterious stranger',
              },
              {
                LinkID: 32,
                LinkDesc: 'Fly on',
              },
            ],
          },
        ],
      },
      {
        ID: 28,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'gnnTi_UsgaU',
            BackgroundId: InThesnow,
            ResponseText:
              'Skinning the reindeer turns out to be bloody and exhausting work, probably because you don\'t have a knife in your inventory. But you have a feeling the hide of a magic flying truck of a beast might come in handy. Or maybe you can give it to someone as a throw. Either way, let no part of the slain foe go to waste, you say!',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'Luckily your robes really hide all the blood',
              },
            ],
          },
        ],
      },
      {
        ID: 29,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'gnnTi_UsgaU',
            BackgroundId: InThesnow,
            ResponseText:
              'Do reindeers lay eggs? It is a mystery. You harvest the eggs swiftly. They are about the size of your head, and each has a tiny christmas sweater that seems to have grown around it. They\'ve be adorable if they didn\'t hold the spawn of that terrifying monster!',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'Christmas omelettes tomorrow!',
              },
            ],
          },
        ],
      },
      {
        ID: 30,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'gnnTi_UsgaU',
            BackgroundId: InThesnow,
            ResponseText:
              'Man you are just taking this reindeer <i>apart</i>. Still, these antlers are really impressive! Wipe off some of this gore and you could enchant up a funny giant antler hat, or maybe just a hunting trophy. Do people like gift trophies or does that undermine the spirit of the thing? You\'re not really sure.',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'Still, into the sack they go!',
              },
            ],
          },
        ],
      },
      {
        ID: 31,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'gnnTi_UsgaU',
            BackgroundId: InThesnow,
            ResponseText:
              'As you draw closer, you recognize the man. It\'s Dallas Cowboys Quarterback Dan Prescott! What\'s he doing out here? You realize you have no way of waking him up. But you know just the football fan who would love a chance to meet one of his idols, so into the sack Dan goes.',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'It\'s not kidnapping if you save them first',
              },
            ],
          },
        ],
      },
      {
        ID: 32,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'yKdjSUEHaJ0',
            BackgroundId: CarInSnow,
            ResponseText:
              'Soon you reach the highway that runs from your neighborhood to the big city. All the cars are frozen in their trips, a perfect still line of lights that runs from one horizon to the other. Except- wait, what is that? Somebody\'s run off the road! And they\'re moving around! A figure waves its arms at you from below.',
            ActionLinks: [
              {
                LinkID: 33,
                LinkDesc: 'Better see what they want',
              },
            ],
          },
        ],
      },
      {
        ID: 33,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'yKdjSUEHaJ0',
            BackgroundId: CarInSnow,
            ResponseText:
              'It\'s a witch! She looks extremely put out. "I was just driving home with my shopping when <i>someone</i>" and here she looks at you pointedly, "stopped time. Didn\'t affect me of course. But I nearly hit everyone else! Look I get that you need a bit of extra shopping time, but could you help me out here? I\'m very stuck in this snowbank." She gestures to her car- it looks like the snow is simply too deep and it can\'t get traction. What will you do?',
            ActionLinks: [
              {
                ContigentOn: [
                  {
                    Name: 'HasWand',
                    Value: true,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasWand',
                    Value: false,
                  },
                ],
                LinkID: 34,
                LinkDesc: 'Use wand',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasRope',
                    Value: true,
                  },
                ],
                LinkID: 36,
                LinkDesc: 'Use 50 ft LED rope',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasOrdBroom',
                    Value: true,
                  },
                ],
                LinkID: 35,
                LinkDesc: 'Use ordinary broom',
              },
            ],
          },
        ],
      },
      {
        ID: 34,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'yKdjSUEHaJ0',
            BackgroundId: CarInSnow,
            ResponseText:
              'You know exactly what this situation requires. <i>Incendio!</i> A jet of flame, hot enough to melt snow but not quite hot enough to melt tires, shoots from your wand and melts a path back to the highway for the stranded witch. Unfortunately your wand burns to ash in the act of casting that final spell. Hope you didn\'t need that later!',
            ActionLinks: [
              {
                LinkID: 37,
                LinkDesc: 'Also, it singed your fingertips',
              },
            ],
          },
        ],
      },
      {
        ID: 35,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'yKdjSUEHaJ0',
            BackgroundId: CarInSnow,
            ResponseText:
              'You know exactly what this situation requires. A broom! You jam the ordinary broom under one of her tires- when she accelerates, it is pulled under and mangled but lasts just long enough to give her traction. The car is freed! And the broom is trashed. But still, victory!',
            ActionLinks: [
              {
                LinkID: 37,
                LinkDesc: 'Non-flying brooms are cheap',
              },
            ],
          },
        ],
      },
      {
        ID: 36,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'yKdjSUEHaJ0',
            BackgroundId: CarInSnow,
            ResponseText:
              'You know exactly what this situation requires. A <i>rope</i>! Unfortunately all you have is this light-up LED thing from the house. You tie it to her bumper and your flying broom. Hey, it\'s strong enough to carry you at 50 mph, it can probably put out some torque! Sure enough, her car eases forward and out of its rut. Victory! And you didn\'t even break the rope.',
            ActionLinks: [
              {
                LinkID: 37,
                LinkDesc: 'That LED rope is surprisingly sturdy. And easy to see by!',
              },
            ],
          },
        ],
      },
      {
        ID: 37,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'yKdjSUEHaJ0',
            BackgroundId: CarInSnow,
            ResponseText:
              'The grateful road-witch thanks you. "Look, we\'ve all stopped time to get some last minute shopping done. But not all of us would stop to help a stranger on the side of the road. Here, I got this at the haunted Macy\'s. I want you to have it."',
            ActionLinks: [
              {
                SetParameters: [
                  {
                    Name: 'HasPumpkinOil',
                    Value: true,
                  },
                ],
                LinkID: 38,
                LinkDesc: 'Get her gift',
              },
            ],
          },
        ],
      },
      {
        ID: 38,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'yKdjSUEHaJ0',
            BackgroundId: CarInSnow,
            ResponseText:
              'She hands you a bottle of magical pumpkin oil! The magic is non-specific, but it\'s very clearly labelled. <b>"Magical. Organic."</b> A perfect Christmas gift! Time to be moving on, though- the city awaits.',
            ActionLinks: [
              {
                LinkID: 39,
                LinkDesc: 'Fly on',
              },
            ],
          },
        ],
      },
      {
        ID: 39,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'fX4niJeN7LY',
            BackgroundId: PoliceLights,
            ResponseText:
              'Down- well, above- the highway you go, towards the big city lights. So many, even in the stillness of frozen time they seem to flash and sparkle. Wait, there are flashing lights- behind you! You turn around and sure enough, the telltale red and blue of the wizarding cops are bearing down on you. A voice shouts: "Pull Over! And by over we mean, to a flat surface. And by pull we mean levitate!"',
            ActionLinks: [
              {
                LinkID: 40,
                LinkDesc: 'Oh geeze, oh man',
              },
            ],
          },
        ],
      },
      {
        ID: 40,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'fX4niJeN7LY',
            BackgroundId: PoliceLights,
            ResponseText:
              'A man in wizard-police robes saunters up to you after you land. "I don\'t see any tags or plates on that broom. You flying an unmarked vehicle in my skies on Christmas? I\'m gonna need to see some wizard ID." You definitely don\'t have a wizard ID. What do you do?',
            ActionLinks: [
              {
                ContigentOn: [
                  {
                    Name: 'HasInitials',
                    Value: true,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasInitials',
                    Value: false,
                  },
                ],
                LinkID: 41,
                LinkDesc: 'Use LED initials',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasYarn',
                    Value: true,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'UsedYarn',
                    Value: true,
                  },
                ],
                LinkID: 42,
                LinkDesc: 'Use wizard yarn',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasFamiliar',
                    Value: true,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'UsedFamiliar',
                    Value: true,
                  },
                ],
                LinkID: 43,
                LinkDesc: 'Use JP Coltrane',
              },
            ],
          },
        ],
      },
      {
        ID: 41,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'fX4niJeN7LY',
            BackgroundId: PoliceLights,
            ResponseText:
              'Brilliant! You pull out the light up LED initials and make them hover above you. "Here\'s my ID officer." He frowns and squints at the bobbing, glowing letters.',
            ActionLinks: [
              {
                LinkID: 44,
                LinkDesc: 'Excellent, now he\'s distracted!',
              },
            ],
          },
        ],
      },
      {
        ID: 42,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'fX4niJeN7LY',
            BackgroundId: PoliceLights,
            ResponseText:
              'You reach into your bag- "Here\'s my ID officer." But you pull out your wizarding yarn and throw it at his face! The yarn, assuming it is playtime, helpfully wraps itself around his face and sticks. The wizard cop stumbles backwards, trying to pull it off.',
            ActionLinks: [
              {
                LinkID: 44,
                LinkDesc: 'Excellent, now he\'s distracted!',
              },
            ],
          },
        ],
      },
      {
        ID: 43,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'fX4niJeN7LY',
            BackgroundId: PoliceLights,
            ResponseText:
              'You reach into your bag- "Here\'s my ID officer." But you pull out Jonathan P Coltrane and poke him in the butt. He leaps onto the officer\'s face, a howling biting mess of cat parts. The wizard cop stumbles backwards, trying to pull him off.',
            ActionLinks: [
              {
                LinkID: 44,
                LinkDesc: 'Excellent, now he\'s distracted! Luckily you can always summon JP later.',
              },
            ],
          },
        ],
      },
      {
        ID: 44,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'fX4niJeN7LY',
            BackgroundId: PoliceLights,
            ResponseText:
              'With the wizard cop distracted, you realize you can get away- you just need his broom <i>and</i> your broom, then he can\'t chase you! You grab your broom and dart to his vehicle.'+
              '{"Name": "ShowBadgeText", "Value": " On the way, you notice he\'s dropped his magic badge in the snow."}'+
              ' You also hear him getting fed up with your distraction behind you. You\'re going to need a little more time. What do you do?',
            ActionLinks: [
              {
                ContigentOn: [
                  {
                    Name: 'HasBadge',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasBadge',
                    Value: true,
                  },
                  {
                    Name: 'ShowBadgeText',
                    Value: false,
                  },
                ],
                LinkID: 45,
                LinkDesc: 'Get that magical badge',
              },
              {
                ContigentOn: [
                  {
                    Name: 'UsedYarn',
                    Value: false,
                  },
                ],
                LinkID: 46,
                LinkDesc: 'Use wizard yarn',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasWand',
                    Value: true,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasWand',
                    Value: false,
                  },
                ],
                LinkID: 47,
                LinkDesc: 'Use wand',
              },
              {
                ContigentOn: [
                  {
                    Name: 'UsedFamiliar',
                    Value: false,
                  },
                ],
                LinkID: 48,
                LinkDesc: 'Use JP Coltrane',
              },
            ],
          },
        ],
      },
      {
        ID: 45,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'fX4niJeN7LY',
            BackgroundId: PoliceLights,
            ResponseText:
              'Stealing from the cops is never a bad idea! The badge is clearly enchanted to reflect spells, and also identifies the officer as a member of the 7th dimensional precinct. Huh, is this even his jurisdiction?',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'We *do* need some stinking badges!',
              },
            ],
          },
        ],
      },
      {
        ID: 46,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'fX4niJeN7LY',
            BackgroundId: PoliceLights,
            ResponseText:
              'You pull out your wizarding yarn and throw it at his face! The yarn, assuming it is playtime, helpfully wraps itself around his face and sticks. The wizard cop stumbles backwards, trying to pull it off.',
            ActionLinks: [
              {
                LinkID: 49,
                LinkDesc: 'Bless you, magic tangle ball',
              },
            ],
          },
        ],
      },
      {
        ID: 47,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'fX4niJeN7LY',
            BackgroundId: PoliceLights,
            ResponseText:
              'Time at last for some wand action! You pull it out and shout the first spell that comes to mind. <i>Riggus Piggus</i>! The wizard cop is tightly bound by... is that bacon-scented rope? He falls backwards on to the snow. Unfortunately your poor wand just can\'t handle it, and splinters in your hands. Hope you don\'t need that later!',
            ActionLinks: [
              {
                LinkID: 49,
                LinkDesc: 'Riggus Piggus?',
              },
            ],
          },
        ],
      },
      {
        ID: 48,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'fX4niJeN7LY',
            BackgroundId: PoliceLights,
            ResponseText:
              'You pull Jonathan P Coltrane out of your bag and poke him in the butt. He leaps onto the officer\'s face, a howling biting mess of cat parts. The wizard cop stumbles backwards, trying to pull him off.',
            ActionLinks: [
              {
                LinkID: 49,
                LinkDesc: 'Luckily you can always summon JP later',
              },
            ],
          },
        ],
      },
      {
        ID: 49,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'fX4niJeN7LY',
            BackgroundId: PoliceLights,
            ResponseText:
              'With your broom underneath you and his in your sack, you fly swiftly away. No way he\'ll be able to pursue you now! Plus, you got whatever he had attached to his ride. Can you say... presents?',
            ActionLinks: [
              {
                ContigentOn: [
                  {
                    Name: 'HasShotgun',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasShotgun',
                    Value: true,
                  },
                ],
                LinkID: 50,
                LinkDesc: 'Get magical riot shotgun',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasRadar',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasRadar',
                    Value: true,
                  },
                ],
                LinkID: 51,
                LinkDesc: 'Get wizardly radar gun',
              },
              {
                LinkID: 52,
                LinkDesc: 'Escape!',
              },
            ],
          },
        ],
      },
      {
        ID: 50,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'fX4niJeN7LY',
            BackgroundId: PoliceLights,
            ResponseText:
              'Attached to his broom is a shotgun. On the side it says "Radaghast\'s Relentless Riot-Controller 3000." It looks like the breach is enchanted to take anything even vaguely cylindrical. You just got some firepower!',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'Assuming you have any ammo',
              },
            ],
          },
        ],
      },
      {
        ID: 51,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'fX4niJeN7LY',
            BackgroundId: PoliceLights,
            ResponseText:
              'Looks like the wizard cop had a magic radar detector too. It has a lot of settings beyond speed- criminosity, criminousness, and crimisitude are the three you even vaguely understand. Still, this is exactly the kind of radiation-emitting toy you\'d love to give as a present to some niece or nephew.',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'Just don\'t point it at me',
              },
            ],
          },
        ],
      },
      {
        ID: 52,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '72g7gW7f3TQ',
            BackgroundId: TombOfHorrors,
            ResponseText:
              'Before long you\'re parked in front of the first destination on your shopping itinerary- The Tomb of Horrors! You haven\'t ever actually been here, but you hear that all the cool witches are just dying to get in. Hopefully that wasn\'t some kind of dark pun. But there will definitely be stuff you can turn into presents in here. What do you do?',
            ActionLinks: [
              {
                ContigentOn: [
                  {
                    Name: 'HasD&DBooks',
                    Value: true,
                  },
                ],
                LinkID: 53,
                LinkDesc: 'Use D&D Sourcebooks',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasWand',
                    Value: true,
                  },
                ],
                LinkID: 54,
                LinkDesc: 'Use Wand',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasReindeerHide',
                    Value: true,
                  },
                ],
                LinkID: 55,
                LinkDesc: 'Use Reindeer Hide',
              },
            ],
          },
        ],
      },
      {
        ID: 53,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '72g7gW7f3TQ',
            BackgroundId: TombOfHorrors,
            ResponseText:
              'This place would be a lot scarier if you didn\'t have a perfect map of everything inside it! You dance down the mural hall, perfectly avoid the traps in the orb room, laugh at the alignment-reversal doorway, and definitely do not climb into any sphere of annihilation portals. Before long you\'re back outside with a pile of loot.',
            ActionLinks: [
              {
                ContigentOn: [
                  {
                    Name: 'HasBracers',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasBracers',
                    Value: true,
                  },
                ],
                LinkID: 56,
                LinkDesc: 'Get Bracers Of Defense +2',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasOrc',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasOrc',
                    Value: true,
                  },
                ],
                LinkID: 57,
                LinkDesc: 'Get Orc',
              },
              {
                LinkID: 58,
                LinkDesc: 'Next Stop!',
              },
            ],
          },
        ],
      },
      {
        ID: 54,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '72g7gW7f3TQ',
            BackgroundId: TombOfHorrors,
            ResponseText:
              'Yeah you know what, nuts to this. You hold up your wand. <i>Accio Treasure!</i> Honestly why D&D wizards don\'t try this first, you\'ll never know. A distant rumbling sounds from the depths of the dungeon. A pile of treasure comes blasting out at you! Unfortunately something strikes your wand, breaking it- but you aren\'t going to need that again, right?',
            ActionLinks: [
              {
                ContigentOn: [
                  {
                    Name: 'HasBracers',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasBracers',
                    Value: true,
                  },
                ],
                LinkID: 56,
                LinkDesc: 'Get Bracers Of Defense +2',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasOrc',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasOrc',
                    Value: true,
                  },
                ],
                LinkID: 57,
                LinkDesc: 'Get Orc',
              },
              {
                LinkID: 58,
                LinkDesc: 'Next Stop!',
              },
            ],
          },
        ],
      },
      {
        ID: 55,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '72g7gW7f3TQ',
            BackgroundId: TombOfHorrors,
            ResponseText:
              'You have the one thing no adventurer has ever brought in here before- the hide of a nearly invincible flying musclebeast! You wrap the hide around yourself and venture inside. Half an hour later, having triggered every possible trap but survived unscathed, you exit and dump your pile of newfound loot on the ground. That, uh... you thought that would take longer.',
            ActionLinks: [
              {
                ContigentOn: [
                  {
                    Name: 'HasBracers',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasBracers',
                    Value: true,
                  },
                ],
                LinkID: 56,
                LinkDesc: 'Get Bracers Of Defense +2',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasOrc',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasOrc',
                    Value: true,
                  },
                ],
                LinkID: 57,
                LinkDesc: 'Get Orc',
              },
              {
                LinkID: 58,
                LinkDesc: 'Next Stop!',
              },
            ],
          },
        ],
      },
      {
        ID: 56,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '72g7gW7f3TQ',
            BackgroundId: TombOfHorrors,
            ResponseText:
              'Awesome, these bracers will add +2 to your AC! Is that... is that even a thing in the real world? Apparently!',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'At the very least they\'re worth like, 1,500 gp.',
              },
            ],
          },
        ],
      },
      {
        ID: 57,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: '72g7gW7f3TQ',
            BackgroundId: TombOfHorrors,
            ResponseText:
              'An actual, living breathing orc was somewhere in the depths of that dungeon. He is shirtless and quite ripped. His name is Hakram Deadhand. You guess this counts as treasure?',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'Maybe you can give him to an aunt or something',
              },
            ],
          },
        ],
      },
      {
        ID: 58,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'Xc2HRnNnK8o',
            BackgroundId: DowntownNight,
            ResponseText:
              'After way too many misadventures, you\'ve reached your downtown destination. Tucked into the 35th floor of one of the towering skyscrapers is a small glass door with a little neon sign: "Fantasy Costco." Where all your dreams come true! No non-flyer is going to get up here, and it looks like the place is warded against time stops as well. You open the door and step inside.',
            ActionLinks: [
              {
                LinkID: 59,
                LinkDesc: 'I do that thing you said, text',
              },
            ],
          },
        ],
      },
      {
        ID: 59,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'Xc2HRnNnK8o',
            BackgroundId: DowntownNight,
            ResponseText:
              'You are in the vestibule of Fantasy Costco. Before you stands the Blue Light Knight, guardian of savings. He levels his sword at you. "Traveler! Your time stop forced me to work a double shift this evening. You have faced many challenges, but now you must face <i>true</i> peril. Use what you have gained to prove yourself worthy of the deals that await you within!" What will you do?',
            ActionLinks: [
              {
                ContigentOn: [
                  {
                    Name: 'HasWand',
                    Value: true,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasWand',
                    Value: false,
                  },
                ],
                LinkID: 60,
                LinkDesc: 'Use wand',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasAntlers',
                    Value: true,
                  },
                  {
                    Name: 'UsedAntlersOnKnight',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'UsedAntlersOnKnight',
                    Value: true,
                  },
                ],
                LinkID: 61,
                LinkDesc: 'Use festive antler hat',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasPainting',
                    Value: true,
                  },
                  {
                    Name: 'UsedPaintingOnKnight',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'UsedPaintingOnKnight',
                    Value: true,
                  },
                ],
                LinkID: 62,
                LinkDesc: 'Use owl painting',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasRadar',
                    Value: true,
                  },
                  {
                    Name: 'UsedRadarOnKnight',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'UsedRadarOnKnight',
                    Value: true,
                  },
                ],
                LinkID: 63,
                LinkDesc: 'Use radar gun',
              },
            ],
          },
        ],
      },
      {
        ID: 60,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'Xc2HRnNnK8o',
            BackgroundId: DowntownNight,
            ResponseText:
              'Alright. Finally! It\'s wand time! You unholster your spell-slinger and level a devastating Expelliarmus right at his smug blue helmet. He drops his sword! Also, you drop your wand. It hits your foot and breaks in two. Cheap piece of-',
            ActionLinks: [
              {
                LinkID: 64,
                LinkDesc: 'You knew you should have brought a backup',
              },
            ],
          },
        ],
      },
      {
        ID: 61,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'Xc2HRnNnK8o',
            BackgroundId: DowntownNight,
            ResponseText:
              'You whip out the reindeer antlers and throw them like a boomerang. The Knight gets ready to parry, but these aren\'t any ordinary festive holiday hat decorations. They weigh like, 50 pounds and they\'re razor sharp! With a mighty CLANG they hit his sword, knocking it out of his hand. They whirl lazily back to you, almost knocking you off your feet as you catch them.',
            ActionLinks: [
              {
                LinkID: 64,
                LinkDesc: 'Sucks about the notches.',
              },
            ],
          },
        ],
      },
      {
        ID: 62,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'Xc2HRnNnK8o',
            BackgroundId: DowntownNight,
            ResponseText:
              'Finally it\'s time for the owl painting to shine! You pull it out of your sack and turn the eerie gaze towards the Knight. He is puzzled at first, then alarmed. He puts his hands to his head, dropping his sword. "NO!" he shouts. "NO! GET IT AWAY!"',
            ActionLinks: [
              {
                LinkID: 64,
                LinkDesc: 'Everyone\'s a critic.',
              },
            ],
          },
        ],
      },
      {
        ID: 63,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'Xc2HRnNnK8o',
            BackgroundId: DowntownNight,
            ResponseText:
              'You whip out the radar gun and set it to "MAXIMUM DETECTION." When you point it at the Knight and pull the trigger, a beam of pure-white <i>force</i> projects from the barrel. He blocks it with his sword, which evaporates even as your mind is filled with perfect knowledge of the item\'s speed and function. Its speed is zero, because it is smoke now.',
            ActionLinks: [
              {
                LinkID: 64,
                LinkDesc: 'This seems like an appropriate toy for children',
              },
            ],
          },
        ],
      },
      {
        ID: 64,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'Xc2HRnNnK8o',
            BackgroundId: DowntownNight,
            ResponseText:
              'Disarmed but not defeated, the Blue Light Knight claps his hands together and with a mighty <b>"DEEEEEEEEALS"</b> unleashes a thunderous blast! The wall behind you, and the door, are blown out into the night sky. You yourself are knocked back on your heels and find yourself dangling precariously over the edge of a truly horrifying drop! You only have time for one item. What will you do?',
            ActionLinks: [
              {
                ContigentOn: [
                  {
                    Name: 'HasWand',
                    Value: true,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasWand',
                    Value: false,
                  },
                ],
                LinkID: 65,
                LinkDesc: 'Use wand',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasWitchyBroom',
                    Value: true,
                  },
                  {
                    Name: 'UsedBroomOnKnight',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'UsedBroomOnKnight',
                    Value: true,
                  },
                ],
                LinkID: 66,
                LinkDesc: 'Use gnarly witch broom',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasBlueToothSpeaker',
                    Value: true,
                  },
                  {
                    Name: 'UsedSpeakerOnKnight',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'UsedSpeakerOnKnight',
                    Value: true,
                  },
                ],
                LinkID: 67,
                LinkDesc: 'Use bluetooth speaker',
              },
            ],
          },
        ],
      },
      {
        ID: 65,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'Xc2HRnNnK8o',
            BackgroundId: DowntownNight,
            ResponseText:
              'Alright. Finally! It\'s wand time! You unholster your spell-slinger and fire off a <i>Levitato!</i> Wait, was that the right-? Well, it worked- you feel light as a feather and regain your footing. Unfortunately your wand has turned into a potato. Farewell you cheap piece of garbage!',
            ActionLinks: [
              {
                LinkID: 68,
                LinkDesc: 'Can\'t even give that out as a present',
              },
            ],
          },
        ],
      },
      {
        ID: 66,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'Xc2HRnNnK8o',
            BackgroundId: DowntownNight,
            ResponseText:
              'You cling to your broom, letting the flying magicks grant you stability. Also you really appreciate the rough pine right now, that extra traction is a literal life-saver.',
            ActionLinks: [
              {
                LinkID: 68,
                LinkDesc: 'Never buying a polished broom again!',
              },
            ],
          },
        ],
      },
      {
        ID: 67,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'Xc2HRnNnK8o',
            BackgroundId: DowntownNight,
            ResponseText:
              'You quickly enchant your bluetooth speakers for <b>MAXIMUM LOUDNESS</b> and hold them behind you while a pure wave of sonic force blasts out and stabilizes your balance.',
            ActionLinks: [
              {
                LinkID: 68,
                LinkDesc: 'Why is everything I own so dangerous?',
              },
            ],
          },
        ],
      },
      {
        ID: 68,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'Xc2HRnNnK8o',
            BackgroundId: DowntownNight,
            ResponseText:
              'With a roar, the Blue Light Knight shoulder-charges you! You jump to one side and he barely skids to a stop- almost going over the edge of the blown out front door himself. You have one opening- how will you make use of it?',
            ActionLinks: [
              {
                ContigentOn: [
                  {
                    Name: 'HasWand',
                    Value: true,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasWand',
                    Value: false,
                  },
                ],
                LinkID: 69,
                LinkDesc: 'Use wand',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasAntlers',
                    Value: true,
                  },
                  {
                    Name: 'UsedAntlersOnKnight',
                    Value: false,
                  },
                ],
                LinkID: 70,
                LinkDesc: 'Use festive antler hat',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasPainting',
                    Value: true,
                  },
                  {
                    Name: 'UsedPaintingOnKnight',
                    Value: false,
                  },
                ],
                LinkID: 71,
                LinkDesc: 'Use owl painting',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasRadar',
                    Value: true,
                  },
                  {
                    Name: 'UsedRadarOnKnight',
                    Value: false,
                  },
                ],
                LinkID: 72,
                LinkDesc: 'Use radar gun',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasWitchyBroom',
                    Value: true,
                  },
                  {
                    Name: 'UsedBroomOnKnight',
                    Value: false,
                  },
                ],
                LinkID: 73,
                LinkDesc: 'Use gnarly witch broom',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasBlueToothSpeaker',
                    Value: true,
                  },
                  {
                    Name: 'UsedSpeakerOnKnight',
                    Value: false,
                  },
                ],
                LinkID: 74,
                LinkDesc: 'Use bluetooth speaker',
              },
            ],
          },
        ],
      },
      {
        ID: 70,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'Xc2HRnNnK8o',
            BackgroundId: DowntownNight,
            ResponseText:
              'You whip out the reindeer antlers and throw them like a boomerang. These aren\'t any ordinary festive holiday hat decorations. They weigh like, 50 pounds and they\'re razor sharp! With a mighty CLANG they hit him in the back, sending Knight careening over the tower\'s edge and into the night below.',
            ActionLinks: [
              {
                LinkID: 75,
                LinkDesc: 'Oh! Uh... um. Hope he has good health insurance.',
              },
            ],
          },
        ],
      },
      {
        ID: 69,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'Xc2HRnNnK8o',
            BackgroundId: DowntownNight,
            ResponseText:
              'Alright. Finally! It\'s wand time! You unholster your spell-slinger and fire off a <i>Levitato!</i> Wait, was that the right-? Well, it worked- the knight begins to float and you easily shove him out and away, flailing into the night sky. Unfortunately your wand has turned into a potato. Farewell you cheap piece of garbage!',
            ActionLinks: [
              {
                LinkID: 75,
                LinkDesc: 'Maybe you can buy a new one inside?',
              },
            ],
          },
        ],
      },
      {
        ID: 71,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'Xc2HRnNnK8o',
            BackgroundId: DowntownNight,
            ResponseText:
              'Look the narrator is trying to work with you here but are you really going to coup-de-gras an armored man with a painting? Yes, yes you are. Okay, uh... You pull it out of your sack and turn the eerie gaze towards the Knight. He is puzzled at first, then alarmed. He puts his hands to his head, dropping his sword. "NO!" he shouts. "NO! GET IT AWAY!" He stumbles backward... straight over the tower\'s edge. He plummets into the night below.',
            ActionLinks: [
              {
                LinkID: 75,
                LinkDesc: 'That\'s what you get for making me think of a use for the painting here',
              },
            ],
          },
        ],
      },
      {
        ID: 72,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'Xc2HRnNnK8o',
            BackgroundId: DowntownNight,
            ResponseText:
              'You whip out the radar gun and set it to "MAXIMUM DETECTION." When you point it at the Knight and pull the trigger, a beam of pure-white <i>force</i> projects from the barrel, hitting the Knight in the back. He evaporates even as your mind is filled with perfect knowledge of his speed and function. His speed is zero, because he is smoke now.',
            ActionLinks: [
              {
                LinkID: 75,
                LinkDesc: 'They give this thing to police?',
              },
            ],
          },
        ],
      },
      {
        ID: 73,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'Xc2HRnNnK8o',
            BackgroundId: DowntownNight,
            ResponseText:
              'You grab your broom and, using it as a pull-up bar, execute a truly devastating two-footed kick directly to the Knight\'s backside. He is totally unbalanced and goes flying over the edge of the tower, into the night below.',
            ActionLinks: [
              {
                LinkID: 75,
                LinkDesc: 'Brutal, but effective',
              },
            ],
          },
        ],
      },
      {
        ID: 74,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'Xc2HRnNnK8o',
            BackgroundId: DowntownNight,
            ResponseText:
              'You quickly enchant your bluetooth speakers for MAXIMUM LOUDNESS and hold them in front of you while a pure sonic wall blasts out and knocks the knight over the tower\'s edge. He plummets into the night.',
            ActionLinks: [
              {
                LinkID: 75,
                LinkDesc: 'Why is everything I own so dangerous?',
              },
            ],
          },
        ],
      },
      {
        ID: 75,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'Xc2HRnNnK8o',
            BackgroundId: DowntownNight,
            ResponseText:
              'As the Knight falls, you hear his last words: "There... is... anotherrrrrr" and then you hear no more. The way is open, the full bounty of wondrous gifts lies before you and- what? It looks like a bomb went off in here. There\'s like three items still on the shelves and just bits and pieces of crap strewn everywhere. This is what you get for shopping on Christmas Eve, you guess.',
            ActionLinks: [
              {
                ContigentOn: [
                  {
                    Name: 'HasSpaceship',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasSpaceship',
                    Value: true,
                  },
                ],
                LinkID: 76,
                LinkDesc: 'Get actual spaceship',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasWizardShit',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasWizardShit',
                    Value: true,
                  },
                ],
                LinkID: 77,
                LinkDesc: 'Get various wizard detritus',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasGiftCards',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasGiftCards',
                    Value: true,
                  },
                ],
                LinkID: 78,
                LinkDesc: 'Get astonishingly cheap gift cards',
              },
              {
                LinkID: 79,
                LinkDesc: 'What was that about another?',
              },
            ],
          },
        ],
      },
      {
        ID: 76,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'Xc2HRnNnK8o',
            BackgroundId: DowntownNight,
            ResponseText:
              'It\'s an actual spaceship, size: one child! Well okay it\'s just a cardboard box with bright paint, but somebody has enchanted it to fly and suddenly you\'re not sure if this gift is such a good idea or not. Oh well, no time to be picky.',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'Better give this to one of the least favorite children',
              },
            ],
          },
        ],
      },
      {
        ID: 77,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'Xc2HRnNnK8o',
            BackgroundId: DowntownNight,
            ResponseText:
              'There\'s enough discarded hats, robes, wand bits and other magic bric-a-brac that you could probably open a costume store. Might as well take it all, you can fob it off on someone right?',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'I hear hobos are really chic this year',
              },
            ],
          },
        ],
      },
      {
        ID: 78,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'Xc2HRnNnK8o',
            BackgroundId: DowntownNight,
            ResponseText:
              'Looks like one of the only items that haven\'t been completely picked over is a huge variety of astonishingly cheap gift cards. What the heck- you\'ll take them all!',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'Nothing says "I love you" like precommitting you to a night at Applebee\'s',
              },
            ],
          },
        ],
      },
      {
        ID: 79,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'gMOWUT7796o',
            BackgroundId: DowntownNight,
            ResponseText:
              'As you exit the Costco, secure in the knowledge that you won\'t be a complete failure this Christmas, you finally realize the truth of the Blue Light Knight\'s warning. Distantly, you hear them- <i>sleighbells, ring-a-ling. Jing jing jing-a-ling.</i> Then you see it- the <i>sleigh. The eight reindeer. The man in red.</i> There\'s no time to panic- Santa\'s on his way. And you\'re on his naughty list.',
            ActionLinks: [
              {
                LinkID: 80,
                LinkDesc: 'Well I mean that\'s debatable I was kind of railroaded into-',
              },
            ],
          },
        ],
      },
      {
        ID: 80,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'gMOWUT7796o',
            BackgroundId: SantaFight,
            ResponseText:
              '<p>HO. HO. HO.<p>'+
              '<p><b>SOMEONE\'S STOPPED TIME ON MY SPECIAL NIGHT.</b></p>'+
              '<p/>'+
              'He stands above you in his hovering sleigh, sack over his shoulder, looking like a giant with a bowl full of murderous jelly.'+
              '<p/>'+
              '<p>I\'M GOING TO HAVE TO GIVE YOU YOUR COAL IN PERSON. <b>BY TURNING YOU INTO SOME.</b></p>'+
              '<p/>'+
              'What do you do?',
            ActionLinks: [
              {
                LinkID: 81,
                LinkDesc: 'Use wand',
              },
              {
                LinkID: 81,
                LinkDesc: 'Use ordinary broom',
              },
              {
                LinkID: 81,
                LinkDesc: 'Use antlers',
              },
              {
                LinkID: 81,
                LinkDesc: 'Use anything!',
              },
            ],
          },
        ],
      },
      {
        ID: 81,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'gMOWUT7796o',
            BackgroundId: SantaFight,
            ResponseText:
              'Before you can pull anything, he slaps away your attack with contemptuous ease. An aura of pure christmas <i>spirit</i> forces you to the floor, as he crackles with arcs of jolly power. He levels his cane at you and a glowing red ball springs into life on the end.'+
              '<p/>'+
              '<p>LOOKS LIKE I\'M GOING TO HAVE TO GUIDE YOUR <i>SLAY</i> TONIGHT.</p>'+
              '<p/>'+
              'Ugh, puns',
            ActionLinks: [
              {
                LinkID: 82,
                LinkDesc: 'Magic bracers, save me!',
              },
              {
                LinkID: 83,
                LinkDesc: 'Magic badge, save me!',
              },
              {
                LinkID: 84,
                LinkDesc: 'Magic reindeer hide, save me!',
              },
            ],
          },
        ],
      },
      {
        ID: 82,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'gMOWUT7796o',
            BackgroundId: SantaFight,
            ResponseText:
              'You hold your arms up in front of you and the bracers absorb the shot, disintegrating!',
            ActionLinks: [
              {
                LinkID: 85,
                LinkDesc: 'Oh no',
              },
            ],
          },
        ],
      },
      {
        ID: 83,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'gMOWUT7796o',
            BackgroundId: SantaFight,
            ResponseText:
              'You hold the police badge up in front of you and it deflects the shot, disintegrating!',
            ActionLinks: [
              {
                LinkID: 85,
                LinkDesc: 'Oh no',
              },
            ],
          },
        ],
      },
      {
        ID: 84,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'gMOWUT7796o',
            BackgroundId: SantaFight,
            ResponseText:
              'You pull the hide over yourself and it absorbs the shot, disintegrating!',
            ActionLinks: [
              {
                LinkID: 85,
                LinkDesc: 'Oh no',
              },
            ],
          },
        ],
      },
      {
        ID: 85,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'gMOWUT7796o',
            BackgroundId: SantaFight,
            ResponseText:
              '<p>HO.</p>'+
              '<p>YOU THINK YOU CAN SAVE YOURSELF WITH <i>LOOT</i>? WITH STOLEN PRESENTS AND GOODS ILL-GOTTEN?</p>'+
              '<p>YOU HAVE FORGOTTEN THE MEANING OF CHRISTMAS.</p>'+
              '<p>IT ISN\'T ABOUT RUSHING AROUND, HARMING OTHERS TO HELP YOURSELF. IT ISN\'T ABOUT PRESENTS.</p>',
            ActionLinks: [
              {
                LinkID: 86,
                LinkDesc: 'Oh no! A christmas ephiphany!',
              },
            ],
          },
        ],
      },
      {
        ID: 86,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'gMOWUT7796o',
            BackgroundId: SantaFight,
            ResponseText:
              'It was never about the presents. Or the adventure. You came out here to get gifts for your family, but all you\'ve been doing tonight is <i>taking.</i> You\'ll never beat him if all you do is selfishly throw one item after another at him. A true Christmas Witch helps others as well as herself.',
            ActionLinks: [
              {
                LinkID: 87,
                LinkDesc: 'Is this the end?',
              },
            ],
          },
        ],
      },
      {
        ID: 87,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'IbX_8QpVIUs',
            BackgroundId: SantaFight,
            ResponseText:
              'Wait! That\'s a load of patriarchal bullshit from a guy who\'s never had to <i>earn</i> a present in his life! What\'s this? The magical pumpkin oil from the witch you rescued! The jersey of Dallas Cowboys QB Dan Prescott! The skeletal hand of Hakram the orc! They begin floating out of your bag, and orbiting around you! They are your reminders- you\'re <i>already</i> helping others, and you\'re a <b>great</b> Christmas Witch!',
            ActionLinks: [
              {
                LinkID: 88,
                LinkDesc: 'Behold the power of the epiphany!',
              },
            ],
          },
        ],
      },
      {
        ID: 88,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'IbX_8QpVIUs',
            BackgroundId: SantaFight,
            ResponseText:
              'Christmas isn\'t about <i>getting</i>! It\'s about <i>giving</i>! And now it\'s time for you to <i>give</i> Santa <i>the beating of his life</i>. Fuck all that emotional labor bullshit!',
            ActionLinks: [
              {
                LinkID: 89,
                LinkDesc: 'You can\'t beat him with one item after another... but how about with TWO ITEMS AT ONCE. Behold the power of the Christmas Witch!',
              },
            ],
          },
        ],
      },
      {
        ID: 89,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'IbX_8QpVIUs',
            BackgroundId: SantaFight,
            ResponseText:
              'With a flash, the Emerald Earrings Of The True Christmas Witch appear on your ears, boosting your Christmas Spirit! Santa stumbles back.'+
              '<p/>'+
              '<p>HO, SOME HOLIDAY SPIRIT AFTER ALL, EH?</p>'+
              '<p>YOU\'RE STILL GOING DOWN THROUGH THE CHIMNEY!</p>'+
              '<p/>'+
              'Shove it, you old bag! Time to show him what this witch can do.',
            ActionLinks: [
              {
                LinkID: 90,
                LinkDesc: 'Use broken wand and bracers of defense +2',
              },
              {
                LinkID: 91,
                LinkDesc: 'Use reindeer egg & magical riot shotgun',
              },
              {
                LinkID: 92,
                LinkDesc: 'use witchy spell book & pumpkin oil',
              },
            ],
          },
        ],
      },
      {
        ID: 90,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'IbX_8QpVIUs',
            BackgroundId: SantaFight,
            ResponseText:
              'You enchant your bracers into full gauntlets, and jam the shards of your broken wand between your balled up fingers. MAGIC PUNCH! With a twist of your broom you connect with Santa\'s sleigh, knocking a giant hole and sending Santa tumbling onto his generous red ass.',
            ActionLinks: [
              {
                LinkID: 93,
                LinkDesc: 'Like hulk hands, but pointy',
              },
            ],
          },
        ],
      },
      {
        ID: 91,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'IbX_8QpVIUs',
            BackgroundId: SantaFight,
            ResponseText:
              'You grab the riot shotgun from your sack, and the breach magically extends to accept a reindeer egg. When you level it at Santa and pull the trigger, a storm of tiny reindeer flies from the barrel, punching a giant hole in his sleigh! Santa tumbles backward onto his generous red ass.',
            ActionLinks: [
              {
                LinkID: 93,
                LinkDesc: 'Christmas blast!',
              },
            ],
          },
        ],
      },
      {
        ID: 92,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'IbX_8QpVIUs',
            BackgroundId: SantaFight,
            ResponseText:
              'With one hand you hurl the pumpkin oil, and with your book open you cast a fireball! The magical christmas molotov strikes Santa\'s sleigh, blasting a tremendous hole in it and knocking Santa backwards onto his generous red ass.',
            ActionLinks: [
              {
                LinkID: 93,
                LinkDesc: 'A festive and finely scented explosion',
              },
            ],
          },
        ],
      },
      {
        ID: 93,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'IbX_8QpVIUs',
            BackgroundId: SantaFight,
            ResponseText:
              'NO!'+
              '<p>I AM THE SPIRIT OF CHRISTMAS!</p>'+
              '<p>NO UPSTART WOMAN CAN DEFEAT ME!</p>'+
              '<p/>'+
              'Santa flails and begins to get up. Several of his reindeer slip their leads and bolt into the night. Pieces of the sleigh are falling away into the still street, hundreds of feet below. You\'ve got one more shot to save Christmas.',
            ActionLinks: [
              {
                LinkID: 94,
                LinkDesc: 'Use bluetooth speaker & magical riot shotgun',
              },
              {
                LinkID: 95,
                LinkDesc: 'Use gnarly witch broom & familiar',
              },
              {
                LinkID: 96,
                LinkDesc: 'Use ordinary broom & festive antler hat',
              },
            ],
          },
        ],
      },
      {
        ID: 94,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'IbX_8QpVIUs',
            BackgroundId: SantaFight,
            ResponseText:
              'You cock the riot shotgun and the breach extends to engulf your bluetooth speaker, enchanted for MAXIMUM LOUDNESS. When you pull the trigger a pure wave of christmassy cheer is ejected towards the ancient elf. It is too much for him- he implodes like a bowl full of jelly down the loo!',
            ActionLinks: [
              {
                LinkID: 97,
                LinkDesc: 'Guess he really felt... the *drop*. Get it?',
              },
            ],
          },
        ],
      },
      {
        ID: 95,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'IbX_8QpVIUs',
            BackgroundId: SantaFight,
            ResponseText:
              'You leap off your broom and leave JP Coltrane at the helm. With a magical blast of jet exhaust he roars forward, impacting Santa like a missile guided by a small, fat cat. The explosion and subsequent feline impact is too much for Santa- he implodes like a bowl full of jelly down the loo!',
            ActionLinks: [
              {
                LinkID: 97,
                LinkDesc: '*Man* it is a good thing that cat can be re-summoned.',
              },
            ],
          },
        ],
      },
      {
        ID: 96,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'IbX_8QpVIUs',
            BackgroundId: SantaFight,
            ResponseText:
              'With some quick enchantment you fuse the remains of your ordinary broom and your antler hat into some kind of horrifying Christmassy axe. Racing forward on your broom you give Santa a mighty chop! The impact is too much for him- he implodes like a bowl full of jelly down the loo!',
            ActionLinks: [
              {
                LinkID: 97,
                LinkDesc: 'Christmaaaas chop!',
              },
            ],
          },
        ],
      },
      {
        ID: 97,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'IbX_8QpVIUs',
            BackgroundId: SantaFight,
            ResponseText:
              'With a weird gurgle, Santa implodes into nothingness, leaving you the undisputed victor and champion of Christmas forevermore. Luckily you don\'t have to give presents to everyone- just your family, which at this point is more-or-less everyone anyway. Time to scoop up his loot and take a victory lap!',
            ActionLinks: [
              {
                ContigentOn: [
                  {
                    Name: 'HasSuit',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasSuit',
                    Value: true,
                  },
                ],
                LinkID: 98,
                LinkDesc: 'Get Bright Red Zentai Suit',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasSack',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasSack',
                    Value: true,
                  },
                ],
                LinkID: 99,
                LinkDesc: 'Get Sack Of Infinite Toys',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasEarrings',
                    Value: false,
                  },
                ],
                SetParameters: [
                  {
                    Name: 'HasEarrings',
                    Value: true,
                  },
                ],
                LinkID: 100,
                LinkDesc: 'Get Emerald Earrings Of The Christmas Witch',
              },
              {
                ContigentOn: [
                  {
                    Name: 'HasEarrings',
                    Value: true,
                  },
                  {
                    Name: 'HasSack',
                    Value: true,
                  },
                  {
                    Name: 'HasSuit',
                    Value: true,
                  },
                ],
                LinkID: 101,
                LinkDesc: 'Onward, to dawn!',
              },
            ],
          },
        ],
      },
      {
        ID: 98,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'IbX_8QpVIUs',
            BackgroundId: SantaFight,
            ResponseText:
              'This form-fitting red suit appears to be enchanted to allow the user to squeeze into any tight space. Unfortunately, it also has to be worn against the bare skin to be effective. Ewwww.',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'Maybe an uncle will be into this',
              },
            ],
          },
        ],
      },
      {
        ID: 99,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'IbX_8QpVIUs',
            BackgroundId: SantaFight,
            ResponseText:
              'Well this should take care of any kids on your list. Weirdly enough it only seems to generate brand name products. Maybe he signed a contract?',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'Free PS4s for life!',
              },
            ],
          },
        ],
      },
      {
        ID: 100,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'IbX_8QpVIUs',
            BackgroundId: SantaFight,
            ResponseText:
              'You can\'t get these, you\'re already wearing them! These diamond and emerald earrings signify that the bearer has had an epiphany about the TRUE meaning of Christmas: using your presents to fight people. Wear them with pride.',
            ActionLinks: [
              {
                LinkID: 'Back',
                LinkDesc: 'Hope they came with a receipt',
              },
            ],
          },
        ],
      },
      {
        ID: 101,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'PHpaiq18J34',
            BackgroundId: ChristmasMorning,
            ResponseText:
              'Christmas day is finally here, and your family arrives to find you exhausted and asleep on the couch amid a truly fantastic pile of presents. There\'s something here for everyone!',
            ActionLinks: [
              {
                LinkID: 102,
                LinkDesc: 'Let the frenzy begin',
              },
            ],
          },
        ],
      },
      {
        ID: 102,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'PHpaiq18J34',
            BackgroundId: ChristmasMorning,
            ResponseText:
              'To your 12 nieces humming:'+
              '{ "Name": "HasWitchyBooks", "Value":" Some lightly-used books on witching. You do not recommend the time-stop spell unless they are REALLY in a hurry."}'+
              '{ "Name": "HasRadar", "Value": " A magical radar gun! Don\'t vaporize your sister."}',
            ActionLinks: [
              {
                SetParameters: [
                  {
                    Name: 'HasWitchyBooks',
                    Value: false,
                  },
                  {
                    Name: 'HasRadar',
                    Value: false,
                  },
                ],
                LinkID: 103,
                LinkDesc: 'No need to thank me',
              },
            ],
          },
        ],
      },
      {
        ID: 103,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'PHpaiq18J34',
            BackgroundId: ChristmasMorning,
            ResponseText:
              'To your 11 nephews fighting:'+
              '{ "Name": "HasSpaceship", "Value": " A cardboard spaceship that actually flies! Max service ceiling: uh, please don\'t leave the atmosphere, okay? Actually stay within 5 feet of the ground."}'+
              '{ "Name": "HasD&DBooks", "Value": " Some D&D books, lightly used! Satanic panic not included."}',
            ActionLinks: [
              {
                SetParameters: [
                  {
                    Name: 'HasSpaceship',
                    Value: false,
                  },
                  {
                    Name: 'HasD&DBooks',
                    Value: false,
                  },
                ],
                LinkID: 104,
                LinkDesc: 'You\'re welcome parents',
              },
            ],
          },
        ],
      },
      {
        ID: 104,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'PHpaiq18J34',
            BackgroundId: ChristmasMorning,
            ResponseText:
              'To your 10 aunts-a-sleeping:'+
              '{ "Name": "HasOrc", "Value": " An orc! He is green, extremely buff and would much rather be your manservant than continue living in a dungeon."}'+
              '{ "Name": "HasYarn", "Value": " Some magic yarn! Please don\'t hold it too close to your face, it is a hugger."}',
            ActionLinks: [
              {
                SetParameters: [
                  {
                    Name: 'HasOrc',
                    Value: false,
                  },
                  {
                    Name: 'HasYarn',
                    Value: false,
                  },
                ],
                LinkID: 105,
                LinkDesc: 'Try to ignore the sexual tension',
              },
            ],
          },
        ],
      },
      {
        ID: 105,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'PHpaiq18J34',
            BackgroundId: ChristmasMorning,
            ResponseText:
              'To your 9 brothers bro\'ing:'+
              '{ "Name": "HasDanP", "Value": " Dallas Cowboys Quarterback Dan Prescott! Here to hang out with you on Christmas!"}'+
              '{ "Name": "HasBadge", "Value": " A wizard cop\'s magic badge! Protect yourself from spells and impersonate law enforcement!"}',
            ActionLinks: [
              {
                SetParameters: [
                  {
                    Name: 'HasDanP',
                    Value: false,
                  },
                  {
                    Name: 'HasBadge',
                    Value: false,
                  },
                ],
                LinkID: 106,
                LinkDesc: 'Go toss the ol pigskin around',
              },
            ],
          },
        ],
      },
      {
        ID: 106,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'PHpaiq18J34',
            BackgroundId: ChristmasMorning,
            ResponseText:
              'To your 8 sisters screeching:'+
              '{ "Name": "HasCopingBook", "Value": " Coping With Being Adopted by Shari Cohen! A timeless classic about how your real family didn\'t want you."}'+
              '{ "Name": "HasOrdBroom", "Value": " An ordinary broom! It\'s like a witches\' broom, but uglier and worse in every way! This is a metaphor."}',
            ActionLinks: [
              {
                SetParameters: [
                  {
                    Name: 'HasCopingBook',
                    Value: false,
                  },
                  {
                    Name: 'HasOrdBroom',
                    Value: false,
                  },
                ],
                LinkID: 107,
                LinkDesc: 'It *does* look like the one you got for me last year doesn\'t it',
              },
            ],
          },
        ],
      },
      {
        ID: 107,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'PHpaiq18J34',
            BackgroundId: ChristmasMorning,
            ResponseText:
              'To your 7 in-laws hiding:'+
              '{ "Name": "HasGiftCards", "Value": " Astonishingly cheap gift cards! You shouldn\'t have! No, really."}'+
              '{ "Name": "HasBlueToothSpeaker", "Value": " A bluetooth speaker, only used in combat once! Named for an ancient Viking so you <i>know</i> it\'ll kill your enemies."}',
            ActionLinks: [
              {
                SetParameters: [
                  {
                    Name: 'HasGiftCards',
                    Value: false,
                  },
                  {
                    Name: 'HasBlueToothSpeaker',
                    Value: false,
                  },
                ],
                LinkID: 108,
                LinkDesc: 'Have *fun* at that applebee\'s, in-laws!',
              },
            ],
          },
        ],
      },
      {
        ID: 108,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'PHpaiq18J34',
            BackgroundId: ChristmasMorning,
            ResponseText:
              'To your 6 family friends:'+
              '{ "Name": "HasSuit", "Value": " A Form-Fitting Red Zentai Suit! Please don\'t tell me what you intend to do with it!"}'+
              '{ "Name": "HasWizardShit", "Value": " Various wizard detritus! Dress up like your favorite comiccon cosplayers!"}',
            ActionLinks: [
              {
                SetParameters: [
                  {
                    Name: 'HasSuit',
                    Value: false,
                  },
                  {
                    Name: 'HasWizardShit',
                    Value: false,
                  },
                ],
                LinkID: 109,
                LinkDesc: 'You might want to wash it first',
              },
            ],
          },
        ],
      },
      {
        ID: 109,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'PHpaiq18J34',
            BackgroundId: ChristmasMorning,
            ResponseText:
              'To your 5 ULTRA parents:'+
              '{ "Name": "HasReindeerEgg", "Value": " Several reindeer eggs clad in tiny magical sweaters! An ULTRA gift for ULTRA people!"}'+
              '{ "Name": "HasPainting", "Value": " A creepy owl painting! Take it! Just take it!"}'+
              '{ "Name": "HasBracers", "Value": " Bracers of Defense +2! Your armor class just got 2 points more ULTRA."}',
            ActionLinks: [
              {
                SetParameters: [
                  {
                    Name: 'HasReindeerEgg',
                    Value: false,
                  },
                  {
                    Name: 'HasPainting',
                    Value: false,
                  },
                  {
                    Name: 'HasBracers',
                    Value: false,
                  },
                ],
                LinkID: 110,
                LinkDesc: 'Ignore the blood',
              },
            ],
          },
        ],
      },
      {
        ID: 110,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'PHpaiq18J34',
            BackgroundId: ChristmasMorning,
            ResponseText:
              'To your 4 tiny cats:'+
              ' JP Coltrane! Well, he <i>thinks</i> he\'s your gift to cats everywhere.'+
              '{ "Name": "HasReindeerHide", "Value": " A magical reindeer hide! Put holes in this instead of my couch, you little bastards!"}',
            ActionLinks: [
              {
                SetParameters: [
                  {
                    Name: 'HasReindeerHide',
                    Value: false,
                  },
                ],
                LinkID: 111,
                LinkDesc: 'Play nice, now',
              },
            ],
          },
        ],
      },
      {
        ID: 111,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'PHpaiq18J34',
            BackgroundId: ChristmasMorning,
            ResponseText:
              'To your 3 cute dogs:'+
              '{ "Name": "HasAntlers", "Value": " An antler hat made of real antlers! Wear it or eat it, I don\'t care which!"}'+
              '{ "Name": "HasRope", "Value": " 50 feet of light-up rope! You won\'t know what to do with it, but you\'ll love it just the same."}',
            ActionLinks: [
              {
                SetParameters: [
                  {
                    Name: 'HasAntlers',
                    Value: false,
                  },
                  {
                    Name: 'HasRope',
                    Value: false,
                  },
                ],
                LinkID: 112,
                LinkDesc: 'Try not to put an eye out',
              },
            ],
          },
        ],
      },
      {
        ID: 112,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'PHpaiq18J34',
            BackgroundId: ChristmasMorning,
            ResponseText:
              'To your 2 moms and dads:'+
              '{ "Name": "HasPinecones", "Value": " A pinecone potpourri! You made it yourself, from pinecones!"}'+
              '{ "Name": "HasPumpkinOil", "Value": " Magic scented pumpkin oil! Try not to use too much, the magic might be... unstable."}'+
              '{ "Name": "HasSack", "Value": " A sack of infinite toys! All your birthday/christmas problems are solved, forever."}',
            ActionLinks: [
              {
                SetParameters: [
                  {
                    Name: 'HasPinecones',
                    Value: false,
                  },
                  {
                    Name: 'HasPumpkinOil',
                    Value: false,
                  },
                  {
                    Name: 'HasSack',
                    Value: false,
                  },
                ],
                LinkID: 113,
                LinkDesc: 'Don\'t crash the economy while spoiling your grandchildren',
              },
            ],
          },
        ],
      },
      {
        ID: 113,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'PHpaiq18J34',
            BackgroundId: ChristmasMorning,
            ResponseText:
              'To your HUSBAAAAND ON THE PC:'+
              ' Well, all he wanted for Christmas was you, after all.'+
              '{ "Name": "HasShotgun", "Value": " Oh fine, here\'s a magical riot shotgun. Please don\'t fire it indoors."}',
            ActionLinks: [
              {
                SetParameters: [
                  {
                    Name: 'HasShotgun',
                    Value: false,
                  },
                ],
                LinkID: 114,
                LinkDesc: 'Or ever',
              },
            ],
          },
        ],
      },
      {
        ID: 114,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'PHpaiq18J34',
            BackgroundId: ChristmasMorning,
            ResponseText:
              'And for you? A well-deserved nap and a full course of flying lessons as soon as the offices open again. Oh, your husband may have something for you as well.',
            ActionLinks: [
              {
                LinkID: 115,
                LinkDesc: 'MEEEEEERRRY CHRISTMAS!',
              },
            ],
          },
        ],
      },
      {
        ID: 115,
        ActionStates: [
          {
            StateID: 1,
            MusicYTID: 'bhi-6CG3Fr0',
            BackgroundId: MerryChristmas,
            ResponseText:
              'THE END',
            ActionLinks: [
            ],
          },
        ],
      },
    ],
  },
});
