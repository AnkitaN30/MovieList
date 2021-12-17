import React from "react";
import axios from "axios";
import MovieComponent from "../movie";
import { render } from "../../../test-utils";

jest.mock("axios");

let sampleData = {
    "type": "top-5-movies",
    "components":
        [
            {
                "type": "order-select",
                "items": [
                    {
                        "label": "Rank",
                        "valueToOrderBy": "rank"
                    }
                ]
            },
            {
                "type": "movie-list",
                "items":
                    [
                        {
                            "id": 2,
                            "type": "poster",
                            "rank": 2,
                            "synopsis": "Epic tale in which an intrepid archaeologist tries to beat a band of Nazis to a unique religious relic which is central to their plans for world domination. Battling against a snake phobia and a vengeful ex-girlfriend, Indiana Jones is in constant peril, making hair's-breadth escapes at every turn in this celebration of the innocent adventure movies of an earlier era.",
                            "title": "Raiders of the Lost Ark",
                            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91M4huXLZDL.jpg",
                            "releaseDate": 1981
                        },
                        {
                            "id": 4,
                            "type": "poster",
                            "rank": 1,
                            "synopsis": "Deckard (Harrison Ford) is forced by the police Boss (M. Emmet Walsh) to continue his old job as Replicant Hunter. His assignment: eliminate four escaped Replicants from the colonies who have returned to Earth. Before starting the job, Deckard goes to the Tyrell Corporation and he meets Rachel (Sean Young), a Replicant girl he falls in love with.",
                            "title": "Blade Runner",
                            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDlo05IpmO384-4atlrs5ARqW9WZty41T7323uE1l2RILPjSTXUt9R6rZRBIIsPLQJd4c&usqp=CAU",
                            "releaseDate": 1982
                        }
                    ]
            }
        ]
};

describe("Movie component", () => {
    test("Renders movie component", async () => {
        axios.get.mockImplementation(() =>
            Promise.resolve({
                data: sampleData,
            })
        );
        let container = render(<MovieComponent />);
        expect(container.getByText("Movies List")).toBeInTheDocument();
    });
});