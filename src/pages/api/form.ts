import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import multer from "multer";
import { FormFile } from "types";
import { sendForm, uploadImage } from "../../util/contentful";

const upload = multer();
const apiRoute = nextConnect({});

type RequestWithFiles = NextApiRequest & {
  files: FormFile[];
};

apiRoute.use(
  "/",
  upload.array("images"),
  async (req: RequestWithFiles, res: NextApiResponse) => {
    // tu masz pliki
    const image = req.files.length > 0 ? await uploadImage(req.files[0]) : null;
    // tu masz resztę pól
    console.log(req.body);
    //TODO: juz to robiłes tam gdzies - zapisywanie forma - mozna skorzystac spokojnie z sendForm i plz dekoracji decorateWithCode z utilsow tak jak w przypadku obrazka. Nie wiem co i jak chcesz tam wyslac ale powinno banglac - obrazek sie uploaduje. Kod z tymi datami przeniesionymi o dwie godziny - miej serce i dodaj tam timezone - nikt przeciez nie bedzie tego zmienial jak sie przejdzie na czas zimowy :P

    res.json({
      data: null,
    });
  },
);

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
