import { Button } from 'components/Button';
import { useEffect, useState } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSession, signOut } from 'next-auth/react';
import * as Styled from './styles';
import { Description } from 'components/Description';
import { Tooltip } from '@mui/material';
import { Form } from 'components/Form';
import { Input } from 'components/Input';
import { Heading } from 'components/Heading';
import { CalendarComponent } from 'components/Calendar';
import { LoginButtons } from 'components/loginButton';
import { Label } from 'components/Input/styles';
import { Wrapper } from 'components/Input/styles';
import { SchedulerType } from 'graphql/types';
import { HoursContainer } from 'components/HoursContainer';
import request from 'graphql-request';
import { NEW_SCHEDULER } from 'graphql/mutations';
import { Response } from 'graphql-request/dist/types.dom';

export type ScheduleProps = {
  schedulers: SchedulerType[];
};
export const Schedule = ({ schedulers = [] }: ScheduleProps) => {
  const [response, setResponse] = useState(null);
  const { data: session } = useSession();
  const [errorMessage, setErrorMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [service, setService] = useState<string>('Mechas Morena Iluminada');
  const [show, setShow] = useState(false);
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [avalibeHour, setAvalibeHour] = useState<Date[]>([]);
  const [dateSelected, setDateSelected] = useState<string>();

  const handleHourSelected = (date: Date) => {
    const dateInString = date.toISOString();
    setDateSelected(dateInString);
  };

  const handleClick = () => {
    setShow((visible) => !visible);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) {
      setErrorMessage('Você não está logado');
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      return;
    }
    if (!phoneNumber || !service || !dateSelected) {
      setErrorMessage('Você não preencheu todos os campos');
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      return;
    }
    const variables = {
      date: dateSelected,
      name: session.user.name,
      email: session.user.email,
      smartphoneNumber: phoneNumber,
      service: service,
      publish: new Date().toISOString(),
    };
    try {
      const res: Response = await request(
        process.env.NEXT_PUBLIC_GRAPHQL,
        NEW_SCHEDULER,
        variables,
      );
      if (res) {
        setResponse(res);
        setDateSelected('');
        setPhoneNumber('');
        setIsDateSelected(false);
      }
    } catch (error) {
      console.log(error.message);
      setErrorMessage(
        'Houve um erro fazer o agendamento. Cheque se as informações estão corretas',
      );
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    }
  };

  const handleFormatPhone = () => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      // Format the phone number using parentheses and hyphens
      setPhoneNumber('(' + match[1] + ') ' + match[2] + '-' + match[3]);
    }
  };

  const handleSelectedDate = (date: Date) => {
    date;
    const avalibeHour = [];
    const initialHour = new Date(date);
    initialHour.setHours(10, 0, 0);
    const finalHour = new Date(date);
    finalHour.setHours(15, 30, 0);

    const intervalSchedule = 30;
    //formating to dd/mm
    const selectedDay = new Date(date).getDay();
    const selectedMonth = new Date(date).getMonth();
    const formatedSelectedDate = `${selectedDay}/${selectedMonth}`;

    const filteredData = schedulers.filter((schedule) => {
      const scheduledDay = new Date(schedule.attributes.Date).getDay();
      const scheduledMonth = new Date(date).getMonth();
      const formatedscheduledDate = `${scheduledDay}/${scheduledMonth}`;
      return formatedSelectedDate === formatedscheduledDate;
    });
    for (
      let time = initialHour.getTime();
      time < finalHour.getTime();
      time += intervalSchedule * 30 * 1000
    ) {
      const intervalHour = new Date(time);
      const actualHour = intervalHour.getHours();
      const actualMin = intervalHour.getMinutes();
      const shouldSkip = filteredData.some((sheduled) => {
        const hour = new Date(sheduled.attributes.Date).getHours();
        const minutes = new Date(sheduled.attributes.Date).getMinutes();
        return actualHour === hour && actualMin === minutes;
      });
      if (!shouldSkip) {
        avalibeHour.push(intervalHour);
      }
      time += intervalSchedule * 30 * 1000;
    }
    setDateSelected('');
    setAvalibeHour(avalibeHour);
    setIsDateSelected(true);
  };
  useEffect(() => {
    if (response) {
      // do something with the response
      alert('Agendado com sucesso');
    }
  }, [response]);

  return (
    <Styled.Wrapper>
      <Button onClick={handleClick}>
        Agendar
        <CalendarMonthIcon fontSize="inherit" />
      </Button>
      {show && (
        <Styled.ScheduleContainer
          visible={show}
          session={session ? true : false}
        >
          {session ? (
            <>
              <Tooltip title="Deslogar" placement="left">
                <Styled.LogoutButton onClick={() => signOut()}>
                  <Styled.LogoutText>sair</Styled.LogoutText>
                  <LogoutIcon fontSize="inherit" />
                </Styled.LogoutButton>
              </Tooltip>
              <Description father="schedule">
                Olá, {session.user.name}. Preencha o formulário abaixo para
                finalizar o agendamento.
                <br />
                <br />
              </Description>
              <Form onSubmit={handleSubmit}>
                <Heading as="h6">Dados pessoais</Heading>
                <Input
                  type="email"
                  value={session.user.email}
                  disabled={true}
                  label="Email"
                ></Input>
                <Input
                  type="text"
                  value={session.user.name}
                  disabled={true}
                  label="Nome"
                ></Input>
                <Input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  label="Telefone"
                  placeholder="(00) 00000-0000"
                  pattern="^\(\d{2}\) \d{5}-\d{4}$"
                  maxLength={15}
                  onBlur={() => {
                    handleFormatPhone();
                  }}
                ></Input>
                <Heading as="h6">Sobre o serviço</Heading>
                <Wrapper>
                  <Label htmlFor="product"> Serviço</Label>
                  <Styled.Select
                    name="Produto"
                    id="product"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <Styled.Option value="Mechas Morena Iluminada">
                      Mechas Morena Iluminada
                    </Styled.Option>
                    <Styled.Option value="Mechas Loiro">
                      Mechas Loiro
                    </Styled.Option>
                    <Styled.Option value="Corte">Corte</Styled.Option>
                    <Styled.Option value="Tratamento">Tratamento</Styled.Option>
                  </Styled.Select>
                </Wrapper>
                <Wrapper>
                  <Label> Selecione a data</Label>
                  <CalendarComponent
                    maxMonth={2}
                    handleSelectedDate={handleSelectedDate}
                  ></CalendarComponent>
                </Wrapper>
                {isDateSelected && (
                  <Wrapper>
                    <Label>Selecione o Horário</Label>
                    <HoursContainer
                      dates={avalibeHour}
                      onClick={handleHourSelected}
                    ></HoursContainer>
                  </Wrapper>
                )}
                <Tooltip title="Agendar" placement="right">
                  <Styled.Send>Agendar!</Styled.Send>
                </Tooltip>
                {errorMessage && (
                  <Styled.errorMessage>{errorMessage}</Styled.errorMessage>
                )}
              </Form>
            </>
          ) : (
            <>
              <Description>
                Você precisar estar logado para efetuar o agendamento. Escolha
                uma das opções de login.
              </Description>
              <LoginButtons />
            </>
          )}
          <Description>
            Ou, se preferir, você pode agendar ou tirar dúvidas com nosso
            atendente pelo WhatsApp clicando{' '}
            <Tooltip title="Abrir chat no WhatsApp">
              <Styled.Link href="https://api.whatsapp.com/send?phone=5521971083900&text=Olá,%20gostaria%20de%20marcar%20um%20agendamento!%20">
                aqui
              </Styled.Link>
            </Tooltip>
            .
          </Description>
        </Styled.ScheduleContainer>
      )}
    </Styled.Wrapper>
  );
};
