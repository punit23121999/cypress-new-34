import loginpage from "../support/pageclass/login";
import linkks  from "../support/pageclass/links";

import logouts from "../support/pageclass/logout";
import search from "../support/pageclass/logout"; 

describe('', () => {
    const login = new loginpage()
    const link = new linkks()
    const logout = new logouts()
    const search = new search()



    it('', () => {

        login.Enterurl()

        login.login()
        search.searchbox()

        link.clickonLink('Admin')


        //logout.logout()
        
    });
});
