import * as React from "react";

export const configuration = {
    Company: React.lazy(()=>import('../../pages/company/Company')),
    Discography: React.lazy(()=>import('../../pages/discografy/Discografy')),
    Services: React.lazy(()=>import('../../pages/services/Services')),
    PlayList: React.lazy(()=>import('../../pages/play-list/PlayList')),
}