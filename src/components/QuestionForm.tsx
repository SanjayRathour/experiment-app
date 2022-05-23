import { Box, Typography } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PrimaryFormButton from "./buttons/PrimaryFormButton";
import FlexBox from "./containers/FlexBox";
import Input from "./Input";
import Select from "./Select";
import Body2 from "./typography/Body2";

const QuestionForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log(data);
    navigate("/bd");
  };
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Body2 text="גיל" />

        <Input type="text" register={register} name="age" />
        <Body2 text="מין" />
        <Select width="85px" name="sex" register={register}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
        <Body2 text="מצב משפחתי" />
        <Select width="150px" name="maritalStatus" register={register}>
          <option value="single">Single</option>
          <option value="relationship">Relationship</option>
          <option value="married">Married</option>
          <option value="widowed">Widowed</option>
          <option value="other">Other</option>
        </Select>
        <Body2 text="מספר נפשות בבית" />
        <Input type="text" register={register} name="numberOfPersons" />
        <Body2 text="מהו טווח ההכנסה החודשית של התא המשפחתי?" />
        <Select width="270px" name="monthlyIncome" register={register}>
          <option value="below5000">Below 5000</option>
          <option value="relationship">5000-10000</option>
          <option value="married">10000-15000</option>
          <option value="widowed">15000-25000</option>
          <option value="other">25000-35000</option>
          <option value="other">Above 35000</option>
        </Select>
        <Body2 text="איזור מגורים" />
        <Select width="270px" name="livingArea" register={register}>
          <option value="below5000">North</option>
          <option value="relationship">Center</option>
          <option value="married">Shrone Area</option>
          <option value="widowed">Jerusalem</option>
          <option value="other">Judea and Samaria Area</option>
          <option value="other">South</option>
        </Select>
        <Body2 text="כמה פעמים בשבוע הינך מבקר/ת בסופר?" />
        <Select width="84px" name="howManyTimes" register={register}>
          <option value="one">One</option>
          <option value="one">Two</option>
          <option value="one">Three</option>
          <option value="one">Four</option>
          <option value="one">Five</option>
          <option value="one">Six</option>
          <option value="one">Seven</option>
        </Select>
        <FlexBox>
          <PrimaryFormButton text="להמשיך" sx={{ mt: "57px" }} />
        </FlexBox>
      </form>
    </Box>
  );
};

export default QuestionForm;
