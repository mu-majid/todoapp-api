describe('Querying Database <Rate plugin Database', function () {
  before((done) => {
    const rate = new Rate({
      _id: new ObjectID('5b6704082b60686fb7d5d9e9'),
      provider: [
        {
          'name': 'POWERSOFT',
          'risk': [
            {
              'type': 'AUTO',
              'ref': '123456789963'
            }, {
              'type': 'HAB',
              'ref': '963987654321'
            }
          ],
          'selected': ['INT', 'WAN']
        }, {
          'name': 'AVIVA',
          'risk': [
            {
              'type': 'AUTO',
              'ref': '188856789963'
            }
          ],
          'selected': ['AV']
        }
      ]
    });
    rate.create()
      .then((doc) => {
        console.log('Created Document', doc);
        done();

      })
      .catch((e) => {
        console.log('Failed To Create With Error ', e);

      });
  });
  after((done) => {
    // removing rate
    Rate.findOneAndRemove({ _id: '5b6704082b60686fb7d5d9e9' }, function (err) {
      if (err) {
        return ('error in after hook ' + err);
      }
      console.log('After hook');

      done();
    });

  });
  describe('getRateById service', function () {
    it('should return RateObject from mongodb', async function () {
      const id = '5b6704082b60686fb7d5d9e9'; // 5b5f2d71fd8e9767c34f404a
      const doc = await getRateById(id);
      expect(doc).to.have.all.keys('_id', 'provider', 'createdAt', 'updatedAt', '__v');
      expect(doc['provider']).to.be.an('array').that.is.not.empty;
      expect(doc['provider'][0]).to.have.all.keys('_id', 'name', 'risk', 'insurer');
    });

    it('should throw error because of not found id', async function () {
      const id = '5b5f2b13fd8e9767c34f3f1b'; // valid but not found
      const fn = getRateById(id);

      return expect(fn).to.be.eventually.rejectedWith(Error);
    });

    it('should throw error because of invalid id', async function () {
      const id = '5b5f2b13fd8e9767c34f3f1'; // Invalid ID
      const fn = getRateById(id);

      return expect(fn).to.be.eventually.rejectedWith(Error);
    });
  });
  describe('getRateFromProviderDB service', function () {
    it('if Database resolved both documents', async function () {
      const providerCtrls = loadProvidersControllers(productServices, providersList);
      const RateObj = await getRateById('5b6704082b60686fb7d5d9e9');
      const getAutoById = sinon.stub();
      const getHabById = sinon.stub();
      const resolvingPromise = new Promise((resolve) => {
        setTimeout(resolve({ 'document': 'value' }), 1500);
      });
      getAutoById.returns(resolvingPromise);
      getHabById.returns(resolvingPromise);
      // putting the stubs on the controllers object.
      _.forOwn(providerCtrls, (providers) => {
        _.forOwn(providers, (controllersObj) => {
          controllersObj['getAutoById'] = getAutoById;
          controllersObj['getHabById'] = getHabById;
        });
      });
      const unfilteredRisks = await getRateFromProviderDB(RateObj, providerCtrls, productServices);
      expect(unfilteredRisks).to.have.all.keys('AUTO', 'HAB');
      expect(unfilteredRisks['AUTO']['POWERSOFT']).to.have.all.keys('value', 'status');
      expect(unfilteredRisks['HAB']['POWERSOFT']).to.have.all.keys('value', 'status');
    });
    it('if Database rejected both documents', async function () {
      const providerCtrls = loadProvidersControllers(productServices, providersList);
      const RateObj = await getRateById('5b6704082b60686fb7d5d9e9');
      const getAutoById = sinon.stub();
      const getHabById = sinon.stub();
      const rejectingPromise = new Promise((resolve, reject) => {
        reject('Mongo Document Not Found');
      });
      getAutoById.returns(rejectingPromise);
      getHabById.returns(rejectingPromise);
      // putting the stubs on the controllers object.
      _.forOwn(providerCtrls, (providers) => {
        _.forOwn(providers, (controllersObj) => {
          controllersObj['getAutoById'] = getAutoById;
          controllersObj['getHabById'] = getHabById;
        });
      });
      const unfilteredRisks = await getRateFromProviderDB(RateObj, providerCtrls, productServices);
      expect(unfilteredRisks).to.have.all.keys('AUTO', 'HAB');
      expect(unfilteredRisks['AUTO']['POWERSOFT']).to.have.all.keys('error', 'status');
      expect(unfilteredRisks['HAB']['POWERSOFT']).to.have.all.keys('error', 'status');
      expect(unfilteredRisks['HAB']['POWERSOFT']['error']).to.equal('Mongo Document Not Found');
    });
    it('if Database rejected one and resolved the other', async function () {
      const providerCtrls = loadProvidersControllers(productServices, providersList);
      const RateObj = await getRateById('5b6704082b60686fb7d5d9e9');
      const getAutoById = sinon.stub();
      const getHabById = sinon.stub();
      const rejectingPromise = new Promise((resolve, reject) => {
        reject('Mongo Document Not Found');
      });
      const resolvingPromise = new Promise((resolve) => {
        setTimeout(resolve({ 'document': 'value' }), 1500);
      });
      getAutoById.returns(resolvingPromise);
      getHabById.returns(rejectingPromise);
      // putting the stubs on the controllers object.
      _.forOwn(providerCtrls, (providers) => {
        _.forOwn(providers, (controllersObj) => {
          controllersObj['getAutoById'] = getAutoById;
          controllersObj['getHabById'] = getHabById;
        });
      });
      const unfilteredRisks = await getRateFromProviderDB(RateObj, providerCtrls, productServices);
      expect(unfilteredRisks).to.have.all.keys('AUTO', 'HAB');
      expect(unfilteredRisks['AUTO']['POWERSOFT']).to.have.all.keys('value', 'status');
      expect(unfilteredRisks['HAB']['POWERSOFT']).to.have.all.keys('error', 'status');
      expect(unfilteredRisks['HAB']['POWERSOFT']['error']).to.equal('Mongo Document Not Found');
      expect(unfilteredRisks['AUTO']['POWERSOFT']['value']).to.be.an('object');
    });
  });
})