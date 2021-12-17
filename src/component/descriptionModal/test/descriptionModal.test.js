import React from "react";
import {store} from "../../../store";
import DescriptionModal from "../descriptionModal";
import {SET_MODALSTATE,SET_MODALDATA} from "../../../reducers/movieReducer";
import {render,fireEvent} from "../../../test-utils";

let item = {
    "id": 4,
    "type": "poster",
    "rank": 1,
    "synopsis": "Deckard (Harrison Ford) is forced by the police Boss (M. Emmet Walsh) to continue his old job as Replicant Hunter. His assignment: eliminate four escaped Replicants from the colonies who have returned to Earth. Before starting the job, Deckard goes to the Tyrell Corporation and he meets Rachel (Sean Young), a Replicant girl he falls in love with.",
    "title": "Blade Runner",
    "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDlo05IpmO384-4atlrs5ARqW9WZty41T7323uE1l2RILPjSTXUt9R6rZRBIIsPLQJd4c&usqp=CAU",
    "releaseDate": 1982
  };

describe("Description Modal test",()=>{

    test("Render the component",()=>{
        store.dispatch({type:SET_MODALSTATE,payload:true});
        store.dispatch({type:SET_MODALDATA,payload:item});        
        let container = render(<DescriptionModal/>);
        expect(container.getByText("Title: Blade Runner")).toBeInTheDocument();
    });

    test("Test for closing the modal",()=>{
        store.dispatch({type:SET_MODALSTATE,payload:true});
        store.dispatch({type:SET_MODALDATA,payload:item});        
        let container = render(<DescriptionModal/>);
        fireEvent.click(container.getByTestId("modal-close"));
        expect(container.queryByText("Title: Blade Runner")).toBeNull();
    });
});
