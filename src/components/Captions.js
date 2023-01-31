import React from "react";
import Card from "react-bootstrap/Card";
import ReactTypingEffect from "react-typing-effect";
import Burnt from "../assets/burnt6.png";

// import AutoScroll from "@brianmcallister/react-auto-scroll";
const captions = [
  "\nAs he sat down in his cane rocking chair, on the balcony of his ancestral home in Punjab, the Juice Maker pondered over a great many things. He thought about his land and its bounty. He dreamt about the future and what it held in store. He even drifted off into a daydream, letting his thoughts roam - boundless and untethered. Many musings flooded his mind, but none more pertinent than this, “How could he capture the essence and spirit of his land in one sip?”\n\nThe Juice Maker had built a thriving sugarcane business over the decades, and naturally spent his evenings treating himself to a glass of the coldest freshest juice there was. But today was different. Today, his palate demanded a change. He had heard so much about the local liquor known as lahan, but had never had the pleasure of tasting it himself. And so, he beckoned to his most trusted ally. \n\nThe Caretaker was a wise man. As wise as he was old, yet his features bore no sign of age. Burly and broad, the Caretaker stood tall - like the ancestral home he had been watching over for the past 50 years, just as his father, and his father’s father had done. His family was born to this land, cultivating and caring for it for centuries. Learning its secrets and passing them down from generation to generation. \n\nThe Juice Maker looked up to his friend and asked, “Can you tell me all there is to know about this famous laahan? Or better yet, can you show me?.” The Caretaker’s face lit up ever so brightly, almost as bright as the stars that very evening, and without hesitation ushered the Juice Maker out of his chair. Off they rode to the Caretaker’s family home on the periphery of the estate. \n\nOn the dining table of the quaint stone structure sat a large jug of liquid that called to them like a siren that lures weary sailors. The Caretaker obliged and emptied the contents of the jug into two steel tumblers.\n\nThe Juice Maker took a long refreshing sip, and immediately demanded, “You must show me how this is made!”\n\nThe Caretaker smiled confidently, as if he had already predicted this reaction and simply nodded in assurance.\n\nThis is where our story begins…\n",
  "\nThe Caretaker explained that for thousands of years, alcohol was a privilege enjoyed only by the upper echelon of society. Permission to brew and distill its forms were only granted to royalty and close allies of those in power. And so, the masses - an enterprising people - had to get creative.\n\nHis ancestors and early inhabitants of this land knew its bounty better than most and, as expected, knew what riches it could provide. And so, hundreds of villages scattered around the subcontinent installed their very own homemade distilleries and began a burgeoning cottage industry. An industry that brewed alcohol in various forms.\n\nWhile each village, and household had their own unique way of distilling their alcohol, the most popular by far was the one they called lahan. This spirit was produced by fermenting various ingredients such as jaggery, dry fruits and water, and once distilled in clay pots, resulted in a spirit that was strong, sweet and refreshing. \n\nThis pehle tod ki daru - or ‘first batch’, if you will - was often consumed between friends and family, at special occasions and local events - rarely being revealed to the outside world. \n\nHowever, as the years rolled on, these amateur distillers became just as bold as the flavour of their brews - discovering new ingredients and distilling techniques. Honing their skills and perfecting their craft. There was revelry in the air. But this brought with it some unwanted attention…\n\nThe angels wanted their share too.\n",
  "\nThe angels dove down from the heavens in hordes, their minds sharp and their throats parched. They had one clear mission - to sample this special spirit that was distilled in the shadows. \n\nThey visited scores of villages in India, drinking barrels upon barrels before moving on. And soon, all the rum was gone…\n\nFor fear of the angels returning and dampening the spirits of the humans once again, the village elders had little choice but to summon the angels and make a pact. One that would last for all eternity. So, it was decided that for every barrel of rum that was distilled, a significant portion would be set aside for the angels to indulge in. \ndistilled in clay pots, resulted in a spirit that was strong, sweet and refreshing. \n\nThis pehle tod ki daru - or ‘first batch’, if you will - was often consumed between friends and family, at special occasions and local events - rarely being revealed to the outside world. \n\nHowever, as the years rolled on, these amateur distillers became just as bold as the flavour of their brews - discovering new ingredients and distilling techniques. Honing their skills and perfecting their craft. There was revelry in the air. But this brought with it some unwanted attention…\n\nThe angels wanted their share too.\n",
  "\nOnce the Caretaker had finished regaling the Juice Maker with the history - and mystery - of the local liquor, the Juice Maker’s mind was made up. He realised that this long-forgotten craft had to be revived and that he would be the one to do it. \n\nHis experience running a sugarcane mill for over 2 decades meant he had all the tools and skills \nnecessary to distill a form of rum that would tantalise the taste buds and elicit euphoria. One that would be made from pure sugarcane juice - something this land had never seen before. \n\nHe raced back to his sugarcane mill and began concocting his very own version of liquid gold.\n\nThe Juice Maker studied the land, sampled ingredients, procured the finest barrels and learned the most sought after techniques of distilling a rum that was nothing short of flawless. But there was one factor he couldn’t account for. True to the Caretaker’s tale, he would be left to the mercy of the angels as they would certainly want their share. \n\nWithin a flash, the angels arrived and it was decided that this rum, this liquid gold, would only be bequeathed to the mortals after 12 long years of aging - a hefty price for anyone, but one the Juice Maker was willing to pay.\n\n",
  "12 summers have passed and the Juice Maker has finally unveiled his creation. 3,600 bottles of the finest, purest sugarcane Juice rum ever distilled in India. Not to mention, the first of its kind. This rum has been aged in American Oak barrels and a mere 6.6% of the original filled quantity remains to be savoured by us mortals. And so the name “Camikara” was chosen - derived from the Sanskrit word for liquid gold. A celebration of land, time, culture and people. ",
];

export default function Captions({ scene }) {
  return (
    <>
      <div
        className="scroll-container prevent-select"
        style={{
          position: "fixed",
          top:
            scene === 0
              ? "10%"
              : scene === 1
              ? "40%"
              : scene === 2
              ? "10%"
              : scene === 3
              ? "4%"
              : scene === 4
              ? "4%"
              : "15%",
          right:
            scene === 2
              ? "54%"
              : scene === 3
              ? "69%"
              : scene === 4
              ? "-12px"
              : "20px",
          maxWidth: "36%",
          minWidth: "36%",
          // limit card height
          minHeight: "40%",
          maxHeight: "40%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <ScrollRod /> */}
        <Card
          body
          style={{
            fontSize: "small",
            maxWidth: "54%",
            minWidth: "54%",
            marginLeft: "6px",
            position: "relative",
            background: "transparent",
            backgroundImage: `url(${Burnt})`,
            borderColor: "transparent",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "12px",paddingTop:"24px", overflow: "hidden" }}>
            {scene === 5 ? (
              captions[4]
            ) : (
              <ReactTypingEffect
                speed={50}
                typingDelay={2000}
                eraseSpeed={50000}
                eraseDelay={100000}
                cursorRenderer={() => <h6 className="quill">{null}</h6>}
                text={[captions[scene]]}
              />
            )}
          </div>
        </Card>
        {/* <ScrollRod /> */}
      </div>
    </>
  );
}
