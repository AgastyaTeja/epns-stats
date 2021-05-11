const axios = require('axios')

const getKpiDetails = async() =>{
    try{
        const result = await axios.post(
            'https://api.thegraph.com/subgraphs/name/epnsproject/epnsprod',
            {
                query: `
                {
                    channels {
                      id
                      name
                      info
                      url
                      subscribedCount
                      notificationCount
                      indexTimestamp
                    },
                    epnss{
                      id
                      channelCount
                      userCount
                      notificationCount
                    },
                    subscriptionStates{
                      id
                      userAddress
                      channelAddress
                      subscribed
                      indexTimestamp
                    }
                  
                  }
                `
            }
        )
        console.log(result.data)
        return result
    }catch(error)
    {
        console.error(error);
    }
    
}

export default getKpiDetails