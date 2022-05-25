import { Box } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PrimaryFormButton from "./buttons/PrimaryFormButton";
import FlexBox from "./containers/FlexBox";
import Input from "./Input";
import Select from "./Select";
import Body2 from "./typography/Body2";
import Error from "./messages/Error";
import { useDispatch, useSelector } from "react-redux";
import { setAnswers } from "../redux/answerSlice";
import { RootState } from "../redux/store";

const QuestionForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const answers = useSelector((state: RootState) => state.answers);

  // schema for yup validation
  const schema = yup.object({
    q1: yup.number().required("Required").typeError("Enter valid age"),
    q2: yup.string().required("Required"),
    q3: yup.string().required("Required"),
    q4: yup.number().required("Required").typeError("Enter Number"),
    q5: yup.string().required("Required"),
    q6: yup.string().required("Required"),
    q7: yup.string().required("Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      q1: answers.q1,
      q2: answers.q2,
      q3: answers.q3,
      q4: answers.q4,
      q5: answers.q5,
      q6: answers.q6,
      q7: answers.q7,
    },
  });

  //on form submit
  const onSubmit: SubmitHandler<any> = (data: any) => {
    dispatch(setAnswers(data));
    navigate("/bd");
  };
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* age */}
        <Body2 text="גיל" />
        <Input type="text" register={register} name="q1" />
        {errors.q1 && <Error message={errors.q1.message} />}

        {/* gender */}
        <Body2 text="מין" />
        <Select width="85px" name="q2" register={register}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
        {errors.q2 && <Error message={errors.q2.message} />}
        {/* marital status */}
        <Body2 text="מצב משפחתי" />
        <Select width="150px" name="q3" register={register}>
          <option value="single">Single</option>
          <option value="relationship">Relationship</option>
          <option value="married">Married</option>
          <option value="widowed">Widowed</option>
          <option value="other">Other</option>
        </Select>
        {errors.q3 && <Error message={errors.q3.message} />}

        {/* how many people in household */}
        <Body2 text="מספר נפשות בבית" />
        <Input type="text" register={register} name="q4" />
        {errors.q4 && <Error message={errors.q4.message} />}

        {/* monthly family income */}
        <Body2 text="מהו טווח ההכנסה החודשית של התא המשפחתי?" />
        <Select width="270px" name="q5" register={register}>
          <option value="below5000">Below 5000</option>
          <option value="5000-10000">5000-10000</option>
          <option value="10000-15000">10000-15000</option>
          <option value="15000-25000">15000-25000</option>
          <option value="25000-35000">25000-35000</option>
          <option value="abouve35000">Above 35000</option>
        </Select>
        {errors.q5 && <Error message={errors.q5.message} />}

        {/* area of residence */}
        <Body2 text="איזור מגורים" />
        <Select width="270px" name="q6" register={register}>
          <option value="north">North</option>
          <option value="center">Center</option>
          <option value="shroneArea">Shrone Area</option>
          <option value="jerusalem">Jerusalem</option>
          <option value="jaudeaAndSamariaArea">Judea and Samaria Area</option>
          <option value="south">South</option>
        </Select>
        {errors.q6 && <Error message={errors.q6.message} />}

        {/* how many times a week you go to supermarket */}
        <Body2 text="כמה פעמים בשבוע הינך מבקר/ת בסופר?" />
        <Select width="84px" name="q7" register={register}>
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
          <option value="four">Four</option>
          <option value="five">Five</option>
          <option value="six">Six</option>
          <option value="seven">Seven</option>
        </Select>
        {errors.q7 && <Error message={errors.q7.message} />}

        <FlexBox>
          <PrimaryFormButton text="להמשיך" sx={{ mt: "57px" }} />
        </FlexBox>
      </form>
    </Box>
  );
};

export default QuestionForm;
