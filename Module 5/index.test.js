
//Language JavaScript using Jest
test('PaymentRequest is created with correct parameters', () => {
    const paymentMethods = [
      {
        supportedMethods: ['basic-card']
      }
    ]
  
    const paymentDetails = {
      total: {
        label: 'Total Amount',
        amount: {
          currency: 'USD',
          value: 8.49
        }
      }
    }
  
    const options = {
      requestPayerName: true,
      requestPayerPhone: true,
      requestPayerEmail: true
    }
  
    const paymentRequest = new PaymentRequest(paymentMethods, paymentDetails, options)
  
    expect(paymentRequest.paymentMethods).toEqual(paymentMethods)
    expect(paymentRequest.details).toEqual(paymentDetails)
    expect(paymentRequest.options).toEqual(options)
})

test('PaymentRequest show() resolves with paymentResponse', () => {
    const paymentMethods = [
        {
        supportedMethods: ['basic-card']
        }
    ]

    const paymentDetails = {
        total: {
        label: 'Total Amount',
        amount: {
            currency: 'USD',
            value: 8.49
        }
        }
    }

    const options = {
        requestPayerName: true,
        requestPayerPhone: true,
        requestPayerEmail: true
    }

    const paymentRequest = new PaymentRequest(paymentMethods, paymentDetails, options)

    return paymentRequest.show().then(paymentResponse => {
        expect(paymentResponse).toBeDefined()
    })
})

test('PaymentResponse complete() resolves with success', () => {
    const paymentMethods = [
        {
        supportedMethods: ['basic-card']
        }
    ]

    const paymentDetails = {
        total: {
        label: 'Total Amount',
        amount: {
            currency: 'USD',
            value: 8.49
        }
        }
    }

    const options = {
        requestPayerName: true,
        requestPayerPhone: true,
        requestPayerEmail: true
    }

    const paymentRequest = new PaymentRequest(paymentMethods, paymentDetails, options)

    return paymentRequest.show().then(paymentResponse => {
        return paymentResponse.complete('success').then(result => {
        expect(result).toBeUndefined()
        })
    })
})

test('PaymentResponse complete() resolves with fail', () => {
    const paymentMethods = [
        {
        supportedMethods: ['basic-card']
        }
    ]

    const paymentDetails = {
        total: {
        label: 'Total Amount',
        amount: {
            currency: 'USD',
            value: 8.49
        }
        }
    }

    const options = {
        requestPayerName: true,
        requestPayerPhone: true,
        requestPayerEmail: true
    }

    const paymentRequest = new PaymentRequest(paymentMethods, paymentDetails, options)

    return paymentRequest.show().then(paymentResponse => {
        return paymentResponse.complete('fail').then(result => {
        expect(result).toBeUndefined()
        })
    })
})

test('PaymentRequest abort() resolves', () => {
    const paymentMethods = [
        {
        supportedMethods: ['basic-card']
        }
    ]

    const paymentDetails = {
        total: {
        label: 'Total Amount',
        amount: {
            currency: 'USD',
            value: 8.49
        }
        }
    }

    const options = {
        requestPayerName: true,
        requestPayerPhone: true,
        requestPayerEmail: true
    }

    const paymentRequest = new PaymentRequest(paymentMethods, paymentDetails, options)

    return paymentRequest.abort().then(() => {
        expect(true).toBe(true)
    })
})