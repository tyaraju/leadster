import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from '../pages/index'
import Banner from '../components/banner'
import ContentVideos from '../components/ContentVideos'
import '@testing-library/jest-dom/extend-expect';
import { act } from "react-dom/test-utils";

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
global.fetch = jest.fn(() => Promise.resolve({
  json: ()=> Promise.resolve({
    "title": "Como aumentar sua Geração de Leads feat. Traktor 1",
    "url": "ouCGdcnxeu8",
    "publicacao": "2023-07-12",
    "duration": "222",
    "description": "Saiba mais sobre a Leadster, primeira plataforma de Marketing Conversacional do Brasil. \n=================\nNeste corte do Webinar \"Captação de Leads e Atendimento",
    "thumb": "thumbnail.png",
    "files": {
      "spreadsheet": "leadster.xlsx",
      "document": "leadster.docx",
      "presentation": "Leadster.pptx",
      "zipfile": "Leadster.zip"
    },
    "type": "Agências"
  })
}))
/*jest.mock('../path/to/videos.json', () => [
  {
    "videos": [
      {
        "title": "Como aumentar sua Geração de Leads feat. Traktor 1",
        "url": "ouCGdcnxeu8",
        "publicacao": "2023-07-12",
        "duration": "222",
        "description": "Saiba mais sobre a Leadster, primeira plataforma de Marketing Conversacional do Brasil. \n=================\nNeste corte do Webinar \"Captação de Leads e Atendimento",
        "thumb": "thumbnail.png",
        "files": {
          "spreadsheet": "leadster.xlsx",
          "document": "leadster.docx",
          "presentation": "Leadster.pptx",
          "zipfile": "Leadster.zip"
        },
        "type": "Agências"
      }
  }
]);*/

describe('Home', () => {
  
  it("should render", () => {
    render(<Home />);
  });
  it("Deve carregar o banner component", () => {
    render(<Banner />);
    expect(screen.getByRole('heading', {name: /Mais Conversão/i})).toBeInTheDocument()
  });
  

  
})
