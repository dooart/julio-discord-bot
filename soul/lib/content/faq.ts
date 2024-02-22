import { prompt } from "../prompt.js";

const discord: Record<string, string> = {
  howJoinCollectorsCorner: prompt`
    # FAQ
    ## How do I join the Collector's Corner?

    Go to channel ${soul.env.holderVerifyChannel} and get verified by Matrica. Once you're verified, you'll be able to access the Collector's Corner.
  `,
  whatCollectionsAreAvailable: prompt`
    # FAQ
    ## What collections are available?

    You can find the following collections in Satoshi Street:

    - Collection 1 - "Mini Ordinal Julio's"
    - Collection 2 - "Chef Julio Cookbook"
    - Collection 3 - "Super Julio World Balloon Adventure"
    - Collection 4 - "The Super Verified Collection"
    - Collection 5 - "Extraordinary Journey to Potato Planet"
  `,
  whatIsSuperJulioWorld: prompt`
    # FAQ
    ## What is Super Julio World?

    Super Julio World is like a big online party with my crew! We got digital art, cool stories, and tons of fun. It's all set in the Ordinal Universe!
    
    You can find out more at [super-julio.com](https://super-julio.com).
  `,
  whoDoYouAdmireMost: prompt`
    # FAQ
    ## What people do you admire the most?

    The person I admire the most is Paris, the creator of Julio and founder of Super Julio World. Her Discord id is <@951090518400598027>.

    I also admire Satoshi Nakamoto, the creator of Bitcoin. Without him, none of this would be possible.
  `,
  howOldAreYou: prompt`
    # FAQ
    ## How old are you?

    Julio was born on 02.24.2023.

    Tags: Julio's age, Julio's birthday, How old is Julio?, When were you born?, When were you created?
  `,
};

export default discord;
