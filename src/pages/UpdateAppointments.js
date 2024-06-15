import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, dateFnsLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay, addHours } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import api from '../services/api';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const locales = {
    'pt-BR': ptBR,
  };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const UpdateAppointments = () => {
  const [userAppointments, setUserAppointments] = useState([]);
  const [allAppointments, setAllAppointments] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [descricao, setDescricao] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        // Fetch user's own appointments
        const userResponse = await api.get('/agendamentos/me');
        setUserAppointments(userResponse.data);

        // Fetch all appointments
        const allResponse = await api.get('/agendamentos');
        setAllAppointments(allResponse.data);
      } catch (error) {
        console.error('Error fetching appointments data', error);
      }
    };

    fetchAppointments();
  }, []);

  const handleSelectSlot = (slotInfo) => {
    const overlapping = allAppointments.some(appointment =>
      new Date(appointment.dataHora).getTime() === new Date(slotInfo.start).getTime()
    );

    if (overlapping) {
      setError('Este horário já está reservado.');
    } else {
      setSelectedSlot({
        ...slotInfo,
        end: addHours(slotInfo.start, 1), // Define o horário de término 1 hora após o início
      });
      setSelectedDate(slotInfo.start);

      // Define a descrição com base nos agendamentos existentes do usuário
      const hasPreviousAppointments = userAppointments.length > 0;
      setDescricao(hasPreviousAppointments ? 'Retorno' : 'Primeira Consulta');

      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedDate) {
      const newAppointment = {
        descricao,
        dataHora: selectedDate.toISOString(),
      };

      try {
        await api.post('/agendamentos', newAppointment);
        setUserAppointments([...userAppointments, newAppointment]);
        setAllAppointments([...allAppointments, newAppointment]);
        setSelectedSlot(null);
        setDescricao('');
        setSelectedDate(new Date());
        setError('');
      } catch (error) {
        console.error('Erro ao criar agendamento', error);
      }
    }
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <h2>Agendamento</h2>
      <div className="form">
        <Calendar
          localizer={localizer}
          events={allAppointments.map(appointment => ({
            title: userAppointments.some(userApp => userApp.id === appointment.id) ? appointment.descricao : 'Ocupado',
            start: new Date(appointment.dataHora),
            end: addHours(new Date(appointment.dataHora), 1), // Duração de 1 hora para cada evento
          }))}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelectSlot}
          style={{ height: 500 }}
          views={{ day: true }}
          defaultView={Views.DAY}
          step={30}
          timeslots={2}
        />
        {selectedSlot && (
          <form onSubmit={handleSubmit} className="form int">
            <input
              type="text"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Descrição"
              className="input"
              required
            />
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              showTimeSelect
              dateFormat="Pp"
              className="input"
            />
            <button type="submit" className="button">Agendar</button>
          </form>
        )}
        {error && <p className="error">{error}</p>}
        <button className="button back-button" onClick={handleBack}>Voltar</button>
      </div>
    </div>
  );
};

export default UpdateAppointments;
