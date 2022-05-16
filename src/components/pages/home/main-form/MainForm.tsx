import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ApiEndpoints } from '../../../../configs/api/endpoints';
import apiService from '../../../../services/apiService';
import Utils from '../../../../utils/Utils';
import { UserContext } from '../../../context/UserContext';
import { useApiError } from '../../../hooks/UseApiError';
import Button from '../../../shared/buttons/Button';
import Checkbox from '../../../shared/fields/Checkbox';
import Switch from '../../../shared/fields/Switch';
import TextField from '../../../shared/fields/TextField';
import CustomForm from '../../../shared/forms/CustomForm';
import Conditional from '../../../utils/Conditional';
import { CreateMealRequestModel } from './CreateMealRequestModel';
import useMainFormFields from './MainFormFields';
import { METRICS } from './MetricTypes';
import { FieldLabel, MainFormPage, PageControls, PageFields, PageTitle } from './StyledComponents';
import { useValidation } from './UseValidation';
import { mapFormDataToRequest } from './Utils';

export const MainForm = () => {
  const pages = useMainFormFields();
  const [currentPage, setCurrentPage] = useState(0);
  const [formFieldsState, setFormFieldsState] = useState({});
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const { userId } = useContext(UserContext);
  const { handleApiError } = useApiError();
  const { validateValue } = useValidation(formFieldsState['metrics']);
  const [fieldErrors, setFieldErrors] = useState({});
  const [pageFieldsModified, setPageFieldsModified] = useState(false);
  const scrollRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fieldsFormStateToSet = {};

    pages.forEach((page) => {
      fieldsFormStateToSet[page.pageId] = { ['apiKey']: page.apiKey };
      page.fields.forEach(field => {
        if (field.type === 'checkbox') {
          fieldsFormStateToSet[page.pageId] = {
            ...fieldsFormStateToSet[page.pageId],
            [field.id]: { checked: false, type: field.type, value: field['value'] }
          };
        }

        if (field.type === 'text') {
          fieldsFormStateToSet[page.pageId] = {
            ...fieldsFormStateToSet[page.pageId],
            [field.id]: { value: '', type: field.type, valueType: field['valueType'] }
          };
        }
      });

      if (page.switchOptions) {
        page.switchOptions.forEach(option => {
          fieldsFormStateToSet['metrics'] = {
            ...fieldsFormStateToSet['metrics'],
            [option.id]: option.firstValue
          };
        });
      }
    });

    setFormFieldsState(fieldsFormStateToSet);
  }, []);

  const handleInputChanges = (event, page, fieldId) => {
    setPageFieldsModified(true);
    const pageFields = formFieldsState[page.pageId];
    pageFields[fieldId] = { ...pageFields[fieldId], value: event.target.value };
    setFormFieldsState({ ...formFieldsState, [page.pageId]: pageFields });

    setFieldErrors({
      ...fieldErrors,
      [fieldId]: !validateValue(event.target.value, pageFields[fieldId].valueType)
    });
  };

  const toggleCheckboxField = (page, fieldId) => {
    const pageFields = formFieldsState[page.pageId];

    if (page.unique) {
      Object.keys(pageFields).filter(key => key !== fieldId && key !== 'apiKey').forEach(key => {
        pageFields[key] = { ...pageFields[key], checked: false };
      });

      pageFields[fieldId] = { ...pageFields[fieldId], checked: !pageFields[fieldId].checked };
    } else {
      pageFields[fieldId] = { ...pageFields[fieldId], checked: !pageFields[fieldId].checked };
    }

    setFormFieldsState({ ...formFieldsState, [page]: pageFields });
  };

  const handleMetricsChange = (fieldId) => {
    const metrics = formFieldsState['metrics'];

    switch (metrics[fieldId]) {
      case METRICS.KG:
        setFormFieldsState({ ...formFieldsState, metrics: { ...metrics, [fieldId]: METRICS.LBS } });
        break;
      case METRICS.LBS:
        setFormFieldsState({ ...formFieldsState, metrics: { ...metrics, [fieldId]: METRICS.KG } });
        break;
      case METRICS.CM:
        setFormFieldsState({ ...formFieldsState, metrics: { ...metrics, [fieldId]: METRICS.FEET } });
        break;
      case METRICS.FEET:
        setFormFieldsState({ ...formFieldsState, metrics: { ...metrics, [fieldId]: METRICS.CM } });
        break;
    }
  };

  const atLeastOneSelected = useMemo(() => {
    const pageId = `page_${currentPage}`;

    if (Utils.isNullOrUndefined(formFieldsState[pageId])) {
      return false;
    }

    for (const key of Object.keys(formFieldsState[pageId])) {
      if (key === 'apiKey') { continue; }

      const field = formFieldsState[pageId][key];
      if (field.type !== 'checkbox') { return true; }
      if (field.type === 'checkbox' && field.checked) { return true; }
    }

    return false;
  }, [formFieldsState, currentPage]);

  const invalidFields = useMemo(() => {
    const pageId = `page_${currentPage}`;

    if (Utils.isNullOrUndefined(formFieldsState[pageId])) {
      return true;
    }

    for (const key of Object.keys(formFieldsState[pageId])) {
      if (key === 'apiKey') { continue; }

      const field = formFieldsState[pageId][key];
      if (field.type !== 'text') { return false; }
      if (field.type === 'text') {
        if (validateValue(field.value, field.valueType) === false) {
          return true;
        }
      }
    }

    return false;
  }, [formFieldsState, currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    setPageFieldsModified(false);
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCreateMealSubmit = () => {
    setSubmitButtonDisabled(true);
    const apiRequestData = mapFormDataToRequest(formFieldsState);
    apiRequestData['userId'] = userId;
    apiService.post<any, CreateMealRequestModel>(ApiEndpoints.createMeal, apiRequestData)
      .then(() => {
        setSubmitButtonDisabled(false);
      })
      .catch((error) => {
        handleApiError(error);
        setSubmitButtonDisabled(false);
      });
  };

  return (
    <CustomForm width={50}>
      {
        pages.map((page, index) =>
          <Conditional key={page.pageId} when={index === currentPage}>
            <span ref={scrollRef} />
            <MainFormPage>
              <PageTitle>{page.pageName}</PageTitle>

              <Conditional when={!Utils.isNullOrUndefined(page.switchOptions)}>
                {
                  page.switchOptions?.map(option => {
                    return <Switch
                      key={option.id}
                      id={option.id}
                      labels={{
                        first: METRICS[option.firstValue],
                        second: METRICS[option.secondValue]
                      }}
                      labelColor='light'
                      onChange={() => { handleMetricsChange(option.id); }}
                    />;
                  })
                }
              </Conditional>

              <PageFields grid={page.fields.length > 3}>
                {
                  page.fields.map((field, index) => {
                    if (field.type === 'text') {
                      return (
                        <TextField
                          key={index}
                          id={field.id}
                          label={field.name}
                          value={formFieldsState[page.pageId] ? formFieldsState[page.pageId][field.id].value : ''}
                          onType={(ev) => handleInputChanges(ev, page, field.id)}
                          error={pageFieldsModified === true && fieldErrors[field.id] === true}
                          errorsList={pageFieldsModified === true && fieldErrors[field.id] === true ? [t('INVALID_VALUE')] : []}
                        />);
                    }
                    if (field.type === 'checkbox') {
                      return <div key={index}>
                        <Checkbox
                          id={field.id}
                          name={field.id}
                          label={field.name}
                          hidden
                          onChange={() => { toggleCheckboxField(page, field.id); }}
                        />

                        <FieldLabel
                          htmlFor={field.id}
                          fieldChecked={formFieldsState[page.pageId] && formFieldsState[page.pageId][field.id].checked}
                        >
                          {field.name}
                        </FieldLabel>
                      </div>;
                    }
                  })
                }
              </PageFields>

              <PageControls>
                <Button onClick={() => handlePrevPage()} disabled={currentPage === 0 || submitButtonDisabled}>{t('PREVIOUS')}</Button>

                <Conditional when={currentPage < pages.length - 1}>
                  <Button onClick={() => handleNextPage()} disabled={!atLeastOneSelected || invalidFields}>{t('NEXT')}</Button>
                </Conditional>

                <Conditional when={currentPage === pages.length - 1}>
                  <Button onClick={() => handleCreateMealSubmit()} disabled={submitButtonDisabled}>{t('CREATE')}</Button>
                </Conditional>
              </PageControls>
            </MainFormPage>
          </Conditional>)
      }

    </CustomForm >
  );
};

export default MainForm;