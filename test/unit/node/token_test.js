import expect from 'expect.js';

import { JWTScopeToken } from '../../../src';
import { beforeEachFn } from '../utils/hooks';

describe('[UNIT] Creating tokens', function () {
  beforeEach(beforeEachFn);

  it('#getReadOnlyToken', function () {
    const token = this.client.getReadOnlyToken('user', 'test');

    expect(token).not.to.be(undefined);

    const feedId = 'usertest';
    const expected = JWTScopeToken(this.client.apiSecret, '*', 'read', {
      feedId,
      expireTokens: this.client.expireTokens,
    });

    expect(token).to.be(expected);
  });

  it('#getReadWriteToken', function () {
    const token = this.client.getReadWriteToken('user', 'test');

    expect(token).not.to.be(undefined);

    const feedId = 'usertest';
    const expected = JWTScopeToken(this.client.apiSecret, '*', '*', {
      feedId,
      expireTokens: this.client.expireTokens,
    });

    expect(token).to.be(expected);
  });
});
